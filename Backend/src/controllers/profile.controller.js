import { User } from "../models/user.model.js"
import { httpStatus } from "../utils/httpStatus.js"
import { uploadOnCloudinary } from "../helpers/cloudinary.js"

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
    console.log("hello...");
    const userId = req.user._id
    const profileLocalPath = req.files?.profilePicture[0]?.path

    if (!profileLocalPath) {
        return res.status(httpStatus.badRequest).json({
            message: "Profile picture localfile not get"
        })
    }

    const profilePicture = await uploadOnCloudinary(profileLocalPath)
    console.log(profilePicture);


    const updatedProfile = await User.findByIdAndUpdate(userId,
        {
            profile: {
                profilePicture: profilePicture?.secure_url
            }
        },
        {
            new: true
        }

    )

    const user = await User.findById(userId)
    console.log("user : ", user);


    return res.status(httpStatus.ok).json({
        message: "Profile Picture Updated Successfully!",
        updatedProfile,
        user
    })

}