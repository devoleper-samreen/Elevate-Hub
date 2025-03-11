
export const getToken = () => {
    return sessionStorage.getItem("AccessToken")
}

export const setToken = (tokenValue) => {
    return sessionStorage.setItem("AccessToken", tokenValue)
}

export const removeToken = () => {
    return sessionStorage.removeItem("AccessToken")
}