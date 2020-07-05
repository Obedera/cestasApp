import { USER_LOGGEN_IN, USER_LOGGEN_OUT } from './actionTypes'

export const login = (user) => {
    return {
        type: USER_LOGGEN_IN,
        payload: user
    }
}


export const logout = () => {
    return {
        type: USER_LOGGEN_OUT
    }
}