import mongoose from "mongoose"
import bcrypt from 'bcrypt.js'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        username: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: mongoose.Schema.Types.String,
            required: true,
            trim: true
        },
        role: {
            type: mongoose.Schema.Types.String,
            enum: ["mentor", "student"],
            default: null
        },

    }
)

userSchema.pre("save", async (next) => {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next()
})

userSchema.index({ email: 1 })

export const User = mongoose.model("User", userSchema)