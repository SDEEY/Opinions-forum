import avatar from './imgs/Opinions.png'
import {ownProfileApi} from "../../api/api";

const SET_OWN_AVATAR = 'SET_OWN_AVATAR'
const SET_OWN_DATE_DATA = 'SET_OWN_DATE_DATA'
const SET_OWN_NICKNAME = 'SET_OWN_NICKNAME'
const UPDATE_OWN_NICKNAME = 'UPDATE_OWN_NICKNAME'
const SET_OWN_CITY = 'SET_OWN_CITY'
const SET_OWN_INSTAGRAM = 'SET_OWN_INSTAGRAM'
const SET_OWN_VK = 'SET_OWN_VK'
const SET_OWN_TELEGRAM = 'SET_OWN_TELEGRAM'

let initialState = {
    avatar: avatar,
    nickname: '',
    city: '',
    socialMedia: {
        instagram: '',
        vk: '',
        telegram: ''
    },
    dateData: {
        createdAt: '',
        lastLoginAt: ''
    }
}

const ownProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OWN_AVATAR:
            return {
                ...state,
                avatar: action.payload.urlAvatar
            }
        case SET_OWN_NICKNAME:
            return {
                ...state,
                nickname: action.payload.nickname
            }
        case UPDATE_OWN_NICKNAME:
            return {
                ...state,
                nickname: action.payload.nickname
            }
        case SET_OWN_CITY:
            return {
                ...state,
                city: action.payload.city
            }
        case SET_OWN_INSTAGRAM:
            return {
                ...state,
                socialMedia: {
                    ...state.socialMedia,
                    instagram: action.payload.instagram,
                }
            }
        case SET_OWN_VK:
            return {
                ...state,
                socialMedia: {
                    ...state.socialMedia,
                    vk: action.payload.vk,
                }
            }
        case SET_OWN_TELEGRAM:
            return {
                ...state,
                socialMedia: {
                    ...state.socialMedia,
                    telegram: action.payload.telegram,
                }
            }
        case SET_OWN_DATE_DATA:
            return {
                ...state,
                dateData: {
                    ...state.dateData,
                    createdAt: action.payload.createdAt,
                    lastLoginAt: action.payload.lastLoginAt
                }
            }

        default:
            return state
    }
}

export const setOwnAvatar = (urlAvatar) => ({type: SET_OWN_AVATAR, payload: {urlAvatar}})

export const setOwnNickname = (nickname) => ({type: SET_OWN_NICKNAME, payload: {nickname}})

export const updateOwnNickname = (nickname) => ({type: UPDATE_OWN_NICKNAME, payload: {nickname}})

export const setOwnDateData = (createdAtSubstr, lastLoginAtObj) => (
    {
        type: SET_OWN_DATE_DATA,
        payload: {
            createdAt: createdAtSubstr,
            lastLoginAt: lastLoginAtObj
        }
    }
)

export const setOwnCity = (city) => ({type: SET_OWN_CITY, payload: {city}})

export const setOwnInstagram = (instagram) => ({type: SET_OWN_INSTAGRAM, payload: {instagram}})
export const setOwnVk = (vk) => ({type: SET_OWN_VK, payload: {vk}})
export const setOwnTelegram = (telegram) => ({type: SET_OWN_TELEGRAM, payload: {telegram}})

export const setOwnAvatarThunk = () => async (dispatch) => {
    const response = await ownProfileApi.setOwnAvatar()
    response.status === 200 && dispatch(setOwnAvatar(response.url))
}

export const setOwnNicknameThunk = (idToken) => async (dispatch) => {
    const response = await ownProfileApi.setOwnNickname(idToken)
    console.log(response)
    !response.error ?
        (response.users[0].displayName === '' || !response.users[0].displayName ? dispatch(setOwnNickname(response.users[0].email)) :
            dispatch(setOwnNickname(response.users[0].displayName))) : alert(response.error.message)
}

export const updateOwnNicknameThunk = (idToken, displayName) => async (dispatch) => {
    const response = await ownProfileApi.updateOwnNickname(idToken, displayName)
    console.log(response)
    !response.error ?
        (response.displayName !== '' ? dispatch(updateOwnNickname(response.displayName)) :
            dispatch(updateOwnNickname(response.email))) : alert(response.error.message)
}

export const setOwnDateDataThunk = (idToken) => async (dispatch) => {
    const response = await ownProfileApi.getOwnDateData(idToken)
    console.log(response)
    if (!response.error) {
        const createdAt = parseInt(response.users[0].createdAt)
        const createdAtNewDate = new Date(createdAt)
        const createdAtSubstr = createdAtNewDate.toISOString().substr(0, 10)

        const lastLoginAt = parseInt(response.users[0].lastLoginAt)
        const lastLoginAtNewDate = new Date(lastLoginAt)
        const lastLoginAtSubstr = lastLoginAtNewDate.toISOString().substr(0, 10)
        const hours = lastLoginAtNewDate.getHours().toString().padStart(2, "0")
        const minutes = lastLoginAtNewDate.getMinutes().toString().padStart(2, "0")
        const lastLoginAtObj = {lastLoginAtSubstr, hours, minutes}

        dispatch(setOwnDateData(createdAtSubstr, lastLoginAtObj))
    } else {
        dispatch(setOwnDateData(null, null))
        alert(response.error.message)
    }
}

export default ownProfileReducer