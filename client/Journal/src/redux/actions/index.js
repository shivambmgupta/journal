import * as Consts from '../../constants/Constants';
import Services from '../../services';
import Storage from '../../util/Storage'; 

export const loginAction = (loginData) => async (dispatch) => {
    try {
        Services.login(loginData, response => {
            if (response?.status == 200) {
                const token = response?.data?.token
                Storage.setItem("token", token)
                dispatch({ type: Consts.LOGIN_ACTION, payload:  token })
            } else dispatch({ type: Consts.INVALID_CREDENTIALS }) 
        });
    } catch (error) {

    }
}

export const retrieveTokenToStore = (token) => async (dispatch) => {
    dispatch({ type: Consts.RETRIEVE_TOKEN, payload: token })
}

export const logoutAction = () => async (dispatch) => {
    Storage.clearAll();
    dispatch({ type: Consts.LOGOUT_ACTION })
}

export const fetchJournals = (token) => async (dispatch) => {
    try {
        Services.fetchJournals(token, response => {
            if(response?.status == 200)
                dispatch({ type: Consts.FETCH_JOURNALS, payload: response.data?.user }) 
        })        
    } catch (error) {

    }
}

export const fetchUserDetails = (token) => async (dispatch) => {
    try {
        Services.fetchUserDetails(token, response => {
            dispatch({ type: Consts.FETCH_USER_DETAILS, payload: response.data?.user })
        });
    } catch (error) {
        
    }
}

export const fetchDeveloperDetails = () => async (dispatch) => {
    try {
        Services.fetchDeveloperDetails((response) => {
            if (response.status == 200)
                dispatch({ type: Consts.ABOUT_DEV_API_CALL_SUCCESS, payload: response.data })
        })
    } catch (error) {
        
    }
}

export const createJournal = (payload, token) => async (dispatch) => {
    try {
        Services.createJournal(payload, token)
    } catch (error) {
        
    }
}