import { USER_LOGGEN_IN, USER_LOGGEN_OUT } from '../actions/actionTypes'

const initialState = {
    auth: false,
    token: null,
    numeroDocumento: null,
    senhaDefinitiva: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGEN_IN:
            return {
                ...state,
                auth: action.payload.auth,
                token: action.payload.token,
                numeroDocumento: action.payload.numeroDocumento,
                senhaDefinitiva: action.payload.senhaDefinitiva
            }
        case USER_LOGGEN_OUT:
            return {
                ...state,
                auth: false,
                token: null,
                numeroDocumento: null,
                senhaDefinitiva: null
            }
        default:
            return state
    }

}

export default reducer