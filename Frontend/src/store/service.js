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
    }))
)

export default useServiceStore