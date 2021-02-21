import * as Consts from '../../constants/Constants'

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {

        case Consts.LOGIN_ACTION: 
            return { ...state, token: action.payload, invalidCredentials: null }

        case Consts.RETRIEVE_TOKEN:
            return { ...state, token: action.payload }

        case Consts.INVALID_CREDENTIALS:
            return { ...state, invalidCredentials: true }

        case Consts.LOGOUT_ACTION:
            return initialState
        
        case Consts.ABOUT_DEV_API_CALL_SUCCESS:
            return { ...state, aboutDev: action.payload }

        case Consts.FETCH_JOURNALS:
            return { ...state, user: action.payload }

        case Consts.FETCH_USER_DETAILS:
            return { ...state, userDetails: action.payload }

        case Consts.INVALID_CREDENTIALS_RESET:
            return { ...state, invalidCredentials: false }

        default: 
            return state
    }
}