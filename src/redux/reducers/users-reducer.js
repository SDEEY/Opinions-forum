import {usersApi} from "../../api/api";

const SET_USERS = 'SET_USERS'
const SET_FOLLOWERS_OF_USER = 'SET_FOLLOWERS_OF_USER'
const SET_SUBSCRIPTIONS_OF_USER = 'SET_SUBSCRIPTIONS_OF_USER'

let initialState = {
    users: [],
    followersOfUser: [],
    subscriptionsOfUser: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case SET_FOLLOWERS_OF_USER:
            return {
                ...state,
                followersOfUser: action.payload.followersOfUser
            }
        case SET_SUBSCRIPTIONS_OF_USER:
            return {
                ...state,
                subscriptionsOfUser: action.payload.subscriptionsOfUser
            }
        default:
            return state
    }
}

const setUsers = (users) => ({type: SET_USERS, payload: {users}})
const setFollowersOfUser = (followersOfUser) => ({type: SET_FOLLOWERS_OF_USER, payload: {followersOfUser}})
const setSubscriptionsOfUser = (subscriptionsOfUser) => ({type: SET_SUBSCRIPTIONS_OF_USER, payload: {subscriptionsOfUser}})

export const setUsersThunk = () => async (dispatch) => {
    const response = await usersApi.getUsersFromGitHub()
    console.log(response)
    dispatch(setUsers(response))
}

export const setFollowersOfUserThunk = (username) => async (dispatch) => {
    const response = await usersApi.getFollowersOfUserFromGitHub(username)
    console.log(response)
    dispatch(setFollowersOfUser(response))
}

export const setSubscribersOfUserThunk = (username) => async (dispatch) => {
    const response = await usersApi.getSubscriptionsOfUserFromGitHub(username)
    console.log(response)
    dispatch(setSubscriptionsOfUser(response))
}


export default usersReducer