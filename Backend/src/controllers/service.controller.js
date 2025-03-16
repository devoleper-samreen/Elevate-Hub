import { Service } from "../models/service.model.js"
import { httpStatus } from "../utils/httpStatus.js"
import { ApiError } from "../helpers/apiError.js"
import { User } from "../models/user.model.js"

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

export const getServiceByMentor = async (req, res) => {
    try {
        const userId = req.user._id
        const services = await Service.find({ mentor: userId })

        if (!services) {
            return res.status(httpStatus.notFound).json({
                message: "Services not found"
            })
        }

        return res.status(httpStatus.ok).json({
            message: "Services found successfully!",
            services
        })
    } catch (error) {
        // throw new ApiError(httpStatus.internalServerError, "Internal server Error")

        return res.status(httpStatus.internalServerError).json({
            message: "error while fecthing services",
            error
        })

    }

}

export const editService = async (req, res) => {
    try {
        const { id, serviceName, description, duration, price } = req.body
        console.log(id);

        const editedService = await Service.findByIdAndUpdate(
            id,
            {
                serviceName,
                description,
                duration,
                price
            },
            { new: true }
        )

        if (!editedService) {
            return res.status(httpStatus.internalServerError).json({
                message: "Error while service edited!",
                editedService
            })

        }

        return res.status(httpStatus.ok).json({
            message: "service edited successfully!",
            editedService
        })
    } catch (error) {
        return res.status(httpStatus.internalServerError).json({
            message: "Error while editing service",
            error
        })

    }

}

export const getAllServicesByMentorUsername = async (req, res) => {
    try {
        const { username } = req.params
        const mentor = await User.findOne({ username })
        if (!mentor) {
            return res.status(httpStatus.notFound).json({
                message: "Mentor not found",
            })
        }
        const allServices = await Service.find({ mentor: mentor._id })

        if (!allServices) {
            return res.status(httpStatus.notFound).json({
                message: "services not found",
            })
        }

        return res.status(httpStatus.ok).json({
            message: "Services fetched successfully!",
            services: allServices
        })

    } catch (error) {
        return res.status(httpStatus.internalServerError).json({
            message: "Inter server by fecthing services"
        })

    }

}