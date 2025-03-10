import { mentorService } from "../services/mentor.service.js"
import { httpStatus } from "../utils/httpStatus.js"
import { ApiError } from "../helpers/apiError.js"

export const getAllMentors = async (req, res) => {
    const mentors = await mentorService.getAllMentors()

    return res.status(httpStatus.ok).json({
        success: true,
        mentors
    })
}

export const getMentorByUsername = async (req, res, next) => {
    const { username } = req.params
    const mentor = await mentorService.getMentorByUsername(username)

    if (!mentor) {
        return next(new ApiError(httpStatus.notFound, "Mentor not found with this username"))
    }

    return res.status(httpStatus.ok).json({
        success: true,
        mentor
    })

}