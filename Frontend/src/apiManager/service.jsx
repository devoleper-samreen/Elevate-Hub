import AxiosInstances from ".";

export const createService = (serviceData) => {
    return AxiosInstances.post('/services/create', serviceData)

}

export const getServiceByMentor = () => {
    return AxiosInstances.get('/services')

}

export const editService = (id, serviceData) => {
    const newData = {
        id,
        ...serviceData
    }
    console.log("servicedata: ", newData);

    return AxiosInstances.put('/services', newData)

}