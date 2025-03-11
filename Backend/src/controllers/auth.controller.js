import { createUser, loginUser } from "../services/auth.services.js"
import { ApiError } from "../helpers/apiError.js"
import { httpStatus } from "../utils/httpStatus.js"
import { User } from "../models/user.model.js"
import { generateAuthTokens } from "../services/token.service.js"

export const signup = async (req, res) => {
    try {
        const { name, username, email, password, role } = req.body

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(httpStatus.badRequest).json({
                success: false,
                message: "Username already exists!"
            });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(httpStatus.badRequest).json({
                success: false,
                message: "Email already registered!"
            });
        }

        const user = await createUser({
            name,
            username,
            email,
            password,
            role
        })

        user.password = undefined

        return res.status(httpStatus.created).json({
            message: "user created successfully!",
            user
        })
    } catch (error) {
        throw ApiError(httpStatus.internalServerError, "Error in created user")

    }

}

export const signin = async (req, res) => {
    const { email, password } = req.body
    const user = await loginUser(email, password)

    const token = await generateAuthTokens(user)

    user.password = undefined

    return res.status(httpStatus.ok).json({
        message: "Login successfully!",
        token,
        user
    })

}