import { httpStatus } from "../utils/httpStatus.js"
import { Booking } from "../models/booking.model.js"

export const bookSession = async (req, res) => {
    try {
        const userId = req.user._id
        const { sessionId, paymentId, paymentStatus } = req.body
        console.log(sessionId, paymentId, paymentStatus);


        if (!sessionId || !paymentId || !paymentStatus) {
            return res.status(httpStatus.badRequest).json({
                message: "Session ID, Payment ID, and Payment Status are required!",
            });
        }

        if (paymentStatus !== "completed") {
            return res.status(httpStatus.badRequest).json({
                message: "Payment failed! Session cannot be booked.",
            });
        }

        const bookSession = await Booking.create({
            sessionId,
            userId,
            paymentId,
            paymentStatus
        })

        return res.status(httpStatus.created).json({
            message: "Session Book Successfully!",
            bookSession
        })

    } catch (error) {
        console.error("Error while booking session:", error);
        return res.status(httpStatus.internalServerError).json({
            message: "Error while booking session",
            error: error.message
        })
    }
}