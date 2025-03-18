import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

const initializeSDK = async () => {
    try {
        const cf = await load({ mode: "sandbox" });
        return cf

    } catch (error) {
        console.error("Cashfree SDK Load Error:", error);
    }
};

const verifyPayment = async (orderId) => {
    console.log("orderid from verifypayment:", orderId);

    const verifyRes = await axios.post(`http://localhost:3000/api/v1/payment/verify`, {
        orderId: orderId
    });

    console.log("verify response :", verifyRes)

    if (verifyRes.data.success) {
        console.log("Payment Verified:", verifyRes.data);
        alert("Payment successful!");
    } else {
        console.log("Payment Not Completed:", verifyRes.data);
        alert("Payment failed or pending!");
    }
}

export const handlePayments = async ({ amount, customerName, customerEmail }) => {
    const cashfree = await initializeSDK();

    if (!cashfree) {
        alert("Cashfree SDK failed to load!");
        return;
    }

    try {
        const orderId = `order_${Date.now()}`
        const res = await axios.post("http://localhost:3000/api/v1/payment", {
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

        cashfree.checkout(checkoutOptions).then(() => {
            console.log("Payment initiated");

            console.log("orderid befor payment int: ", orderId);

            //payment verification
            verifyPayment(orderId)
        })

    } catch (error) {
        console.error("Payment Error:", error);
    }
};


