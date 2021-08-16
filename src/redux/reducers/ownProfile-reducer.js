import avatar from './imgs/Opinions.png'
import {ownProfileApi} from "../../api/api";

const SET_OWN_AVATAR = 'SET_OWN_AVATAR'
const SET_OWN_DATE_DATA = 'SET_OWN_DATE_DATA'

let initialState = {
    avatar: avatar,
    dateData: {
        createdAt: '',
        lastLoginAt: ''
    }
}

const ownProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OWN_AVATAR:
            return{
                ...state,
                avatar: action.payload.urlAvatar
            }
        case SET_OWN_DATE_DATA:
            return{
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

export const setOwnDateData = (createdAtSubstr, lastLoginAtObj) => (
    {
        type: SET_OWN_DATE_DATA,
        payload: {
            createdAt: createdAtSubstr,
            lastLoginAt: lastLoginAtObj
        }
    }
)


export const setOwnAvatarThunk = () => async (dispatch) => {
    const response = await ownProfileApi.setOwnAvatar()
    response.status === 200 && dispatch(setOwnAvatar(response.url))
}

export const setOwnDateDataThunk = (idToken) => async (dispatch) => {
    const response = await ownProfileApi.getOwnDateData(idToken)
    if(!response.error) {
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