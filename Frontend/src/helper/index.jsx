export const getToken = () => {
    return sessionStorage.getItem(token)
}

export const removeToken = () => {
    return sessionStorage.removeItem(token)
}