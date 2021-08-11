import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    email: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = () => ({type: SET_USER_DATA})

export const signInWithEmailAndPasswordThunk = (data) => {
    return async (dispatch) => {
        await authApi.signInWithEmailAndPassword(data)
        dispatch(setUserData())
    }
}

export default authReducer

