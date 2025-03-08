import mongoose from "mongoose"
import bcrypt from "bcryptjs"

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

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next()
})

// userSchema.index({ email: 1 })
// Warning: Duplicate schema index on {"email":1} found. 
// This is often due to declaring an index using both "index: true" and "schema.index()".Please remove the duplicate index definition.

export const User = mongoose.model("User", userSchema)