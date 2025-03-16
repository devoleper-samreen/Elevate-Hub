import { create } from "zustand"
import { devtools } from "zustand/middleware"

const useServiceStore = create()(
    devtools((set) => ({
        services: [],
        setServices: (services) => set(() => (
            {
                services: services
            }
        )),
        editedService: (id, updatedData) =>
            set((state) => ({
                services: state.services.map((service) =>
                    service.id === id ? { ...service, ...updatedData } : service
                ),
            })),
    }))
)

export default useServiceStore