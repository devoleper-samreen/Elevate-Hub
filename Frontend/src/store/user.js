import { create } from "zustand"
import { createJSONStorage, devtools } from "zustand/middleware"

const useUserStore = create()(
    devtools((set) => ({
        user: null,
        setUser: (user) => set(
            () => ({ user })
        )
    })),
    {
        name: import.meta.env.VITE_USER_STORE_PERSIST,
        storage: createJSONStorage(() => localStorage)
    }
)

export default useUserStore