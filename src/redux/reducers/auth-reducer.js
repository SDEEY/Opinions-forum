import {authApi} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    nickname: 'nickname',
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return{
                ...state,
                isAuth: true,
                nickname: action.payload.nickname
            }
        default:
            return state
    }
}

export const setUserData = (nickname) => ({type: SET_USER_DATA, payload: {nickname}})

export const signInWithEmailAndPasswordThunk = (data) => async (dispatch) => {
        const signInJson = await authApi.signInWithEmailAndPassword(data)
        console.log(signInJson)
        !signInJson.error ? dispatch(setUserData(signInJson.email)) : alert(signInJson.error.message)
}

export const signUpWithEmailAndPasswordThunk = (data) => async (dispatch) => {
    const signUpJson = await authApi.signUpWithEmailAndPassword(data)
    console.log(signUpJson)
    !signUpJson.error ? dispatch(setUserData(signUpJson.email)) : alert(signUpJson.error.message)
}

export default authReducer

