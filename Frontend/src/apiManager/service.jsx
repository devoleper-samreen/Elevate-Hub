import AxiosInstances from ".";

export const createService = (serviceData) => {
    return AxiosInstances.post('/services/create', serviceData)

}