import { Service } from "../models/service.model.js"
import { httpStatus } from "../utils/httpStatus.js"
import { ApiError } from "../helpers/apiError.js"

export const createService = async (req, res,) => {
    try {
        const mentorId = req.user._id
        const { serviceName, description, duration, price } = req.body

        const service = await Service.create({
            mentor: mentorId,
            serviceName,
            description,
            duration,
            price
        })

        if (!service) {
            return res.status(httpStatus.internalServerError).json({
                message: "Service not created!"
            })
        }

        return res.status(httpStatus.ok).json({
            message: "Service created successfully!",
            service
        })

    } catch (error) {
        throw new ApiError(httpStatus.internalServerError, "Interner Server Error")
    }

}