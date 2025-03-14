import AxiosInstances from "./index";

export const updateProfile = (userData) => {
    return AxiosInstances.put('/profile/update', userData)
}

export const uploadImage = (photo) => {
    return AxiosInstances.patch('/profile/update-photo', photo)
}