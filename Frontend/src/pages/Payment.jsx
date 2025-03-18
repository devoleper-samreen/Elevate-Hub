import { useState, useEffect } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";

const PaymentButton = () => {
    const [loading, setLoading] = useState(false);
    const [cashfree, setCashfree] = useState(null);

    useEffect(() => {
        const initializeSDK = async () => {
            try {
                const cf = await load({ mode: "sandbox" });
                setCashfree(cf); // Store in state
            } catch (error) {
                console.error("Cashfree SDK Load Error:", error);
            }
        };
        initializeSDK();
    }, []);

    const orderId = `order_${Date.now()}`;
    const amount = 100;
    const customerName = "John Doe";
    const customerEmail = "johndoe@example.com";
    const customerPhone = "9876543210";

    const getSessionId = async () => {
        try {

            const res = await axios.post("http://localhost:3000/api/v1/payment", {
                orderId,
                amount,
                customerName,
                customerEmail,
                customerPhone
            });

            if (res.data?.payment_session_id) {
                return res.data.payment_session_id;
            } else {
                throw new Error("Payment session ID missing!");
            }
        } catch (error) {
            console.error("Session ID Error:", error);
        }
    };

    const handlePayment = async () => {
        if (!cashfree) {
            alert("Payment system not initialized. Please try again.");
            return;
        }

        try {
            setLoading(true);

            const sessionId = await getSessionId();
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
            });
        } catch (error) {
            console.error("Payment Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            disabled={loading}
            className="bg-blue-500 p-4 text-white"
        >
            {loading ? "Processing..." : "Buy Now"}
        </button>
    );
};

export default PaymentButton;

