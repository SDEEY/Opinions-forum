import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_AUTH_TO_FALSE = 'SET_IS_AUTH_TO_FALSE'
const CHANGE_EMAIL = 'CHANGE_EMAIL'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

let initialState = {
    isAuth: false,
    idToken: null,
    newEmail: '',
    newPassword: ''
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
        case CHANGE_EMAIL:
            return {
                ...state,
                newEmail: action.payload.newEmail
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                newPassword: action.payload.newPassword
            }
        default:
            return state
    }
}

const setUserData = (idToken) => ({type: SET_USER_DATA, payload: {idToken}})
const setNewEmail = (newEmail) => ({type: SET_USER_DATA, payload: {newEmail}})
const setNewPassword = (newPassword) => ({type: SET_USER_DATA, payload: {newPassword}})
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

export const changeEmailThunk = (idToken, email) => async (dispatch) => {
    const changeEmailJson = await authApi.changeEmail(idToken, email)
    console.log(changeEmailJson)
    !changeEmailJson.error ? dispatch(setUserData(changeEmailJson.idToken)) : alert(changeEmailJson.error.message)
}

export const changePasswordThunk = (idToken, password) => async (dispatch) => {
    const changePasswordJson = await authApi.changePassword(idToken, password)
    console.log(changePasswordJson)
    !changePasswordJson.error ? dispatch(setUserData(changePasswordJson.idToken)) : alert(changePasswordJson.error.message)
}

export default authReducer

