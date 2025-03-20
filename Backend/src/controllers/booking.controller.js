import { httpStatus } from "../utils/httpStatus.js"
import { Booking } from "../models/booking.model.js"
import { Service } from "../models/service.model.js"

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

export const getUserBookSession = async (req, res) => {
    try {
        const userId = req.user._id

        const bookedSessions = await Booking.find({ userId }).populate({
            path: "sessionId",
            select: "mentor serviceName price duration",
            populate: {
                path: "mentor",
                select: "name"
            }
        })

        if (!bookedSessions) {
            return res.status(httpStatus.notFound).json({
                message: "Not found any session"
            })
        }

        return res.status(httpStatus.ok).json({
            message: "Fecthed booked sessions successfully!",
            bookedSessions
        })

    } catch (error) {
        console.log(error);
        return res.status(httpStatus.internalServerError).json({
            message: "Error fecthing user booked session"
        })


    }

}

export const getMentorAllBookSession = async (req, res) => {
    try {
        const mentorId = req.user._id

        const mentorServices = await Service.find({ mentor: mentorId }).select("_id");

        const sessionIds = mentorServices.map(service => service._id);

        const bookings = await Booking.find({ sessionId: { $in: sessionIds } })
            .populate("userId", "name email") // Get user details
            .populate("sessionId", "serviceName price"); // Get session details

        return res.status(httpStatus.ok).json({
            message: "fetched all booking successfully!",
            bookings
        });

    } catch (error) {
        console.log(error);
        return res.status(httpStatus.internalServerError).json({
            message: "Error while fecthing mentor booking"
        })
    }

}