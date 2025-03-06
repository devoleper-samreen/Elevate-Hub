import axios from 'axios'
import toast from "react-hot-toast"
import { getToken, removeToken } from "../helper/index"

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL
const userStorePersist = import.meta.env.VITE_USER_STORE_PERSIST


let AxiosInstances;

(
    () => {
        AxiosInstances = axios.create({
            baseURL: BASE_URL,

        })
    }
)()


AxiosInstances.interceptors.request.use((config) => {
    const token = getToken()
    token && (config.headers.Authorization = `Bearer ${token}`)
    return config
})

AxiosInstances.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.data.success === 'false') {
            const message = error.response.data.message
            message ? toast.error(message) : toast.error("somthing went wrong")

            if (error.response.status === 401) {
                removeToken()
                sessionStorage.removeItem(userStorePersist)
                window.location.href = "/signin"
            }
        }
        else {
            toast.error("Something went wrong again")
        }
        throw error
    }
)

export default AxiosInstances
