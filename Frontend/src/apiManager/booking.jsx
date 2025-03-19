import AxiosInstances from ".";

export const bookSession = (sessionData) => {
    return AxiosInstances.post('/book-session', sessionData)
}

export const getUserBookedSession = () => {
    return AxiosInstances.get("/book-session")
}