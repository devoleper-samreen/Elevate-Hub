import AxiosInstances from "./index";

export const updateProfile = (userData) => {
    return AxiosInstances.put('/profile/update', userData)
}