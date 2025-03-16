import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    sessionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    },
    paymentId: {
        type: String, //Razorpay se jo payment ID milegi
        default: null
    },

}, { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
