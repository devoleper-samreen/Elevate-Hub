import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.PAYMENT_API_KEY;
Cashfree.XClientSecret = process.env.PAYMENT_API_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

export const checkout = async (req, res) => {
    const { amount, orderId, customerName, customerEmail, customerPhone } = req.body;
    try {
        const request = {
            "order_amount": amount,
            "order_currency": "INR",
            "order_id": orderId,
            "customer_details": {
                "customer_id": "walterwNrcMi",
                "customer_name": customerName,
                "customer_email": customerEmail,
                "customer_phone": customerPhone
            },
            "order_meta": {
                "return_url": "https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}"
            }
        };

        const response = await Cashfree.PGCreateOrder("2022-09-01", request);

        console.log('Order Created successfully:', response.data);

        return res.status(200).json({
            success: true,
            payment_url: response.data.payments.url,
            payment_session_id: response.data.payment_session_id
        });

    } catch (error) {
        console.error('Error:', error?.response?.data?.message || error.message);
        return res.status(500).json({
            success: false,
            message: "Payment failed", error: error.message
        });
    }
};

// export const verifyPayment = async (req, res) => {
//     try {
//         const data = req.body;

//         console.log("Cashfree Webhook Data:", data);

//         if (data.event === "PAYMENT_SUCCESSFUL") {
//             console.log(`✅ Payment Successful: Order ID ${data.order.order_id}`);

//             // Yahan database update karo
//             // await OrderModel.updateOne({ orderId: data.order.order_id }, { status: "PAID" });

//             return res.status(200).json({
//                 success: true,
//                 message: "Payment Verified"
//             });

//         } else if (data.event === "PAYMENT_FAILED") {
//             console.log(`❌ Payment Failed: Order ID ${data.order.order_id}`);

//             // Payment fail ho gaya, database update karo
//             // await OrderModel.updateOne({ orderId: data.order.order_id }, { status: "FAILED" });

//             return res.status(400).json({
//                 success: false,
//                 message: "Payment Failed"
//             });
//         }

//         return res.status(400).json({
//             success: false,
//             message: "Invalid Event"
//         });

//     } catch (error) {
//         console.error("Webhook Error:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Webhook Handling Error"
//         });
//     }
// }

export const verifyPayment = async (req, res) => {
    try {
        const { orderId } = req.body
        console.log("orderId:", orderId);


        const response = await Cashfree.PGOrderFetchPayments('2023-08-01', orderId)

        return res.json({
            success: true,
            response: response.data
        });

    } catch (error) {
        console.log(error);
    }

}


