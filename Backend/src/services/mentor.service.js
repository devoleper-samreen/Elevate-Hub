import { User } from "../models/user.model.js"
import { Service } from "../models/service.model.js"

const getAllMentors = async () => {
    return await User.find({
        role: "mentor"
    })
}

const getMentorById = async (id) => {
    return await User.findOne({
        _id: id,
        role: "mentor"
    })
}

const getMentorByUsername = async (username) => {
    const mentor = User.findOne({
        username,
        role: "mentor"
    })

    if (!mentor) {
        return null
    }

    console.log("Mentor found:", mentor);

    return mentor
}

export const mentorService = {
    getAllMentors,
    getMentorByUsername,
    getMentorById
}