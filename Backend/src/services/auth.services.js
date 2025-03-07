import { User } from "../models/user.model.js"
import { ApiError } from "../helpers/apiError.js"
import { httpStatus } from "../utils/httpStatus.js"

export const createUser = async (data) => {
    return await User.create(data)
}