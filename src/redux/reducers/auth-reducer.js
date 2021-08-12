import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
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

export const signInWithEmailAndPasswordThunk = (data) => async (dispatch) => {
        const signInJson = await authApi.signInWithEmailAndPassword(data)
        console.log(signInJson)
        !signInJson.error ? dispatch(setUserData()) : alert(signInJson.error.message)
}

export const signUpWithEmailAndPasswordThunk = (data) => async (dispatch) => {
    const signUpJson = await authApi.signUpWithEmailAndPassword(data)
    console.log(signUpJson)
    !signUpJson.error ? dispatch(setUserData()) : alert(signUpJson.error.message)
}

export default authReducer

