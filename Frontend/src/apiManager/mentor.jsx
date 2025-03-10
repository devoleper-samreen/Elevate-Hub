import AxiosInstances from "./index"

const getAllMentors = () => {
    return AxiosInstances.get('/mentor')
}

const getMentorsByUsername = (username) => {
    return AxiosInstances.get('/mentor', username)
}

const mentorApi = {
    getAllMentors,
    getMentorsByUsername
};

export default mentorApi