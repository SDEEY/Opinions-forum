import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_AUTH_TO_FALSE = 'SET_IS_AUTH_TO_FALSE'

let initialState = {
    // nickname: 'nickname',
    isAuth: false,
    idToken: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                // nickname: action.payload.nickname,
                idToken: action.payload.idToken
            }
        case SET_IS_AUTH_TO_FALSE:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }
}

export const setUserData = (idToken) => ({type: SET_USER_DATA, payload: {idToken}})

export const setIsAuthToFalse = () => ({type: SET_IS_AUTH_TO_FALSE})


export const signInWithEmailAndPasswordThunk = (data) => async (dispatch) => {
    const signInJson = await authApi.signInWithEmailAndPassword(data)
    console.log(signInJson)
    !signInJson.error ? dispatch(setUserData(signInJson.idToken)) : alert(signInJson.error.message)
}

export const signUpWithEmailAndPasswordThunk = (data) => async (dispatch) => {
    const signUpJson = await authApi.signUpWithEmailAndPassword(data)
    console.log(signUpJson)
    !signUpJson.error ? dispatch(setUserData(signUpJson.idToken)) : alert(signUpJson.error.message)
}

export default authReducer

