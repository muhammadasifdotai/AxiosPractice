import { API } from "../Api"
import useAuthStore from "./authStore"

export const signIn = async (params) => {
    try {
        const obj = {
            username: params.username,
            password: params.password
        }
        console.log('obj:', obj)
        const response = await API.post('auth/login', obj)
        console.log('response Sign: ', response)
        const user = await response.data
        console.log('user, authApiService', user)
        useAuthStore.getState().UpdatedUserData(user.data)
    } catch (error) {
        console.log('authApiService', error)
    }
}