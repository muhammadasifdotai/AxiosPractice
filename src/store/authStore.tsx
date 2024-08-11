import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = set => ({
    userData: {},
    UpdatedUserData: user => {
        set((state) => ({
            userData: user
        }))
    },
    logout: () => {
        set(state => ({
            userData: {}
        }))
    }
})

const useAuthStore = create(
    devtools(
        persist( authStore, {
            name: 'userData'
        }
        )
    )
)

export default useAuthStore;