import AxiosInstances from ".";

export const bookSession = (sessionData) => {
    return AxiosInstances.post('/book-session', sessionData)
}

export const getUserBookedSession = () => {
    return AxiosInstances.get("/book-session")
}

export const getBooking = () => {
    return AxiosInstances.get('/mentor-booking')
}