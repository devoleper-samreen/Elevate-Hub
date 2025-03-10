import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        mentor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        serviceName: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        description: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        duration: {
            type: mongoose.Schema.Types.Number,
            required: true,
            trim: true
        },
        price: {
            type: mongoose.Schema.Types.Number,
            required: true,
            trim: true
        },
        active: {
            type: mongoose.Schema.Types.Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

export const Service = mongoose.model("Service", serviceSchema)