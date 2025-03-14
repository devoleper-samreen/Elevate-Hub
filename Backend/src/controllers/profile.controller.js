import { User } from "../models/user.model.js"
import { httpStatus } from "../utils/httpStatus.js"

export const updateProfile = async (req, res) => {
    try {
        //userId se find karke data update kar dege
        const userId = req.user._id
        const data = req.body

        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true })

        if (!updatedUser) {
            return res.status(httpStatus.notFound).json({
                message: "User not found"
            })
        }

        console.log("Updated user: ", updatedUser);


        return res.status(httpStatus.ok).json({
            message: "Profile updated successfully!",
            updatedUser
        })

    } catch (error) {
        return res.status(httpStatus.internalServerError).json({
            message: "Server error",
            error
        })

    }
}

export const updateImage = async (req, res) => {
    const userId = req.user._id

    console.log("hello...");

    return res.status(httpStatus.ok).json({
        message: "Profile Picture Updated Successfully!"
    })



}