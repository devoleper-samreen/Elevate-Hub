import { load } from "@cashfreepayments/cashfree-js";
import AxiosInstances from "../apiManager";
import toast from "react-hot-toast";

const initializeSDK = async () => {
    try {
        const cf = await load({ mode: "sandbox" });
        return cf

    } catch (error) {
        console.error("Cashfree SDK Load Error:", error);
    }
};

const verifyPayment = async (orderId) => {

    const verifyRes = await AxiosInstances.post('/payment/verify', {
        orderId: orderId
    });

    console.log("verify response :", verifyRes)

    if (verifyRes.data.success == true) {
        // console.log("Payment Verified:", verifyRes.data);
        toast.success("payment successfully done!")
        // alert("Payment successful!");

    } else {
        // console.log("Payment Not Completed:", verifyRes.data);
        // alert("Payment failed!");
        toast.error("Payment Failed!")

    }

    return verifyRes;
}

export const handlePayments = async ({ amount, customerName, customerEmail }) => {
    const cashfree = await initializeSDK();

    if (!cashfree) {
        alert("Cashfree SDK failed to load!");
        return;
    }

    try {
        const orderId = `order_${Date.now()}`
        const res = await AxiosInstances.post("/payment", {
            orderId,
            amount,
            customerName,
            customerEmail,
            customerPhone: "1234567899"
        });

        const sessionId = res.data.payment_session_id;
        if (!sessionId) {
            alert("Failed to get session ID!");
            return;
        }

        let checkoutOptions = {
            paymentSessionId: sessionId,
            redirectTarget: "_modal",
        };

        await cashfree.checkout(checkoutOptions)

        console.log("Payment process completed, verifying payment...");


        // Now verify the payment
        const verifyRes = await verifyPayment(orderId);
        return verifyRes;

    } catch (error) {
        console.error("Payment Error:", error);
    }
};


