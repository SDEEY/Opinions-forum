import avatar from './../../../src/Components/Routes/OwnProfile/OwnAvatar/Opinions.png'
import {ownProfileApi} from "../../api/api";


const SET_OWN_AVATAR = 'SET_OWN_AVATAR'

let initialState = {
    avatar: avatar
}

const ownProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OWN_AVATAR:
            return{
                ...state,
                avatar: action.payload.urlAvatar
            }
        default:
            return state
    }
}

export const setOwnAvatar = (urlAvatar) => ({type: SET_OWN_AVATAR, payload: {urlAvatar}})

export const setOwnAvatarThunk = () => async (dispatch) => {
    const response = await ownProfileApi.setOwnAvatar()
    response.status === 200 && dispatch(setOwnAvatar(response.url))
}

export default ownProfileReducer