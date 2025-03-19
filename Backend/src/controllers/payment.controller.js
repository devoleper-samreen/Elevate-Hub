import { Cashfree } from "cashfree-pg";
import { httpStatus } from "../utils/httpStatus.js"

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

        return res.status(httpStatus.created).json({
            success: true,
            payment_url: response.data.payments.url,
            payment_session_id: response.data.payment_session_id
        });

    } catch (error) {
        return res.status(httpStatus.internalServerError).json({
            success: false,
            message: "Payment failed",
            error: error.message
        });
    }
};


// export const verifyPayment = async (req, res) => {
//     try {
//         const { orderId } = req.body

//         const response = await Cashfree.PGOrderFetchPayments('2023-08-01', orderId)

//         return res.status(httpStatus.ok).json({
//             success: true,
//             response: response.data
//         });

//     } catch (error) {
//         console.log(error);
//         return res.status(httpStatus.internalServerError).json({
//             message: "Error while payment verification"
//         })
//     }

// }

export const verifyPayment = async (req, res) => {
    try {
        const { orderId } = req.body;

        const response = await Cashfree.PGOrderFetchPayments('2023-08-01', orderId);
        console.log("response:", response);

        const data = response?.data
        console.log("hamara data:", data);
        console.log("payment status", data[0].payment_status);


        if (data[0].payment_status == 'SUCCESS') {
            return res.status(httpStatus.ok).json({
                success: true,
                message: "Payment successful",
            });

        } else {
            return res.status(httpStatus.badRequest).json({
                success: false,
                message: "Payment not successful",

            });

        }

    } catch (error) {
        console.error("Error while verifying payment:", error);
        return res.status(httpStatus.internalServerError).json({
            success: false,
            message: "Error while payment verification"
        });
    }
};



