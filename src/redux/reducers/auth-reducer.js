import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_AUTH_TO_FALSE = 'SET_IS_AUTH_TO_FALSE'
const SET_EMAIL = 'SET_EMAIL'
// const SET_PASSWORD = 'SET_PASSWORD'

let initialState = {
    isAuth: false,
    idToken: null,
    email: '',
    // password: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                idToken: action.payload.idToken
            }
        case SET_IS_AUTH_TO_FALSE:
            return {
                ...state,
                isAuth: false
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        // case SET_PASSWORD:
        //     return {
        //         ...state,
        //         password: action.payload.password
        //     }
        default:
            return state
    }
}

const setUserData = (idToken) => ({type: SET_USER_DATA, payload: {idToken}})
export const setEmail = (email) => ({type: SET_EMAIL, payload: {email}})
// export const setPassword = (newPassword) => ({type: SET_PASSWORD, payload: {newPassword}})
export const setIsAuthToFalse = () => ({type: SET_IS_AUTH_TO_FALSE})


export const signInWithEmailAndPasswordThunk = (data) => async (dispatch) => {
    const signInJson = await authApi.signInWithEmailAndPassword(data)
    const signInJsonEmail = await signInJson.email
    console.log(signInJson)
    !signInJson.error ? (dispatch(setUserData(signInJson.idToken)) && dispatch(setEmail(signInJsonEmail))): alert(signInJson.error.message)
}

export const signUpWithEmailAndPasswordThunk = (data) => async (dispatch) => {
    const signUpJson = await authApi.signUpWithEmailAndPassword(data)
    const signUpJsonEmail = await signUpJson.email
    console.log(signUpJsonEmail)
    !signUpJson.error ? (dispatch(setUserData(signUpJson.idToken)) && dispatch(setEmail(signUpJsonEmail))): alert(signUpJson.error.message)
}

export const changeEmailThunk = (idToken, email) => async (dispatch) => {
    const changeEmailJson = await authApi.changeEmail(idToken, email)
    console.log(changeEmailJson)
    !changeEmailJson.error ? (dispatch(setUserData(changeEmailJson.idToken)) && alert('Email changed')) : alert(changeEmailJson.error.message)
}

export const changePasswordThunk = (idToken, password) => async (dispatch) => {
    const changePasswordJson = await authApi.changePassword(idToken, password)
    console.log(changePasswordJson)
    !changePasswordJson.error ? (dispatch(setUserData(changePasswordJson.idToken)) && alert('Password changed')) : alert(changePasswordJson.error.message)
}

export default authReducer

