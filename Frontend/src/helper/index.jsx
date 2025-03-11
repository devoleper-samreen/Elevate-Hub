const token = import.meta.env.VITE_TOKEN

export const getToken = () => {
    return sessionStorage.getItem(token)
}

export const setToken = () => {
    return sessionStorage.setItem(token)
}

export const removeToken = () => {
    return sessionStorage.removeItem(token)
}