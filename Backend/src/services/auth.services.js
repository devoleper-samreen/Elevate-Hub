import { User } from "../models/user.model.js"
import { ApiError } from "../helpers/apiError.js"
import { httpStatus } from "../utils/httpStatus.js"

export const createUser = async (data) => {
    return await User.create(data)
}

export const loginUser = async (email, password) => {
    const user = await User.findOne({ email }).select("+password")

    if (!user || !(await user.isPasswordMatch(password))) {
        throw new ApiError(httpStatus.unAuthorized, "Incorrect email or password")
    }

    return user

}