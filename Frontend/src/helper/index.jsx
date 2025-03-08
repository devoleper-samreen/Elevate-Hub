const token = import.meta.env.VITE_TOKEN

export const getToken = () => {
    return sessionStorage.getItem(token)
}

export const removeToken = () => {
    return sessionStorage.removeItem(token)
}