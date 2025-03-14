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
        profile: {
            profilePicture: {
                type: mongoose.Schema.Types.String,
                default: ''

            },
            tags: {
                type: [mongoose.Schema.Types.String],
                default: []
            },
            skills: {
                type: [mongoose.Schema.Types.String],
                default: []
            },
            // title: {
            //     type: mongoose.Schema.Types.String,
            //     default: ''
            // },
            bio: {
                type: mongoose.Schema.Types.String,
                default: ''
            },
            college: {
                type: mongoose.Schema.Types.String,
                default: ''
            },
            social: {
                linkedin: {
                    type: mongoose.Schema.Types.String,
                    default: ''
                },
                github: {
                    type: mongoose.Schema.Types.String,
                    default: ''
                },
                twitter: {
                    type: mongoose.Schema.Types.String,
                    default: ''
                },
                facebook: {
                    type: mongoose.Schema.Types.String,
                    default: ''
                },
                instagram: {
                    type: mongoose.Schema.Types.String,
                    default: ''
                },
            }
        }

    }, {
    timestamps: true
}
)

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next()
})

userSchema.methods.isPasswordMatch = async function (password) {
    return bcrypt.compare(password, this.password)

}

// userSchema.index({ email: 1 })
// Warning: Duplicate schema index on {"email":1} found. 
// This is often due to declaring an index using both "index: true" and "schema.index()".Please remove the duplicate index definition.

export const User = mongoose.model("User", userSchema)