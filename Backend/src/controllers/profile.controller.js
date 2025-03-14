import { User } from "../models/user.model.js"
import { httpStatus } from "../utils/httpStatus.js"

export const updateProfile = async (req, res) => {
    try {
        console.log("hello: ", req.user);

        //userId se find karke data update kar dege
        const userId = req.user._id
        const data = req.body

        console.log("data : ", userId, data);


        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true })

        if (!updatedUser) {
            return res.status(httpStatus.notFound).json({
                message: "User not found"
            })
        }

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