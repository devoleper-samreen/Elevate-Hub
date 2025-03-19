import AxiosInstances from ".";

export const bookSession = (sessionData) => {
    return AxiosInstances.post('/book-session', sessionData)
}