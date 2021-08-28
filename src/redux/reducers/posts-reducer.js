import {postsApi} from "../../api/api";

const SET_POSTS = 'SET_POSTS'
const SET_POSTS_USERS = 'SET_POSTS_USERS'
const SET_USER_ID = 'SET_USER_ID'
const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_POSTS = 'SET_USER_POSTS'

let initialState = {
    posts: [],
    users: [],
    userId: null,
    userData: {},
    userPosts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
        case SET_POSTS_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.payload.userId
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload.userData
            }
        case SET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload.userPosts
            }
        default:
            return state
    }
}

const setPosts = (posts) => ({type: SET_POSTS, payload: {posts}})
const setPostsUsers = (users) => ({type: SET_POSTS_USERS, payload: {users}})
export const setUserId = (userId) => ({type: SET_USER_ID, payload: {userId}})
const setUserData = (userData) => ({type: SET_USER_DATA, payload: {userData}})
const setUserPosts = (userPosts) => ({type: SET_USER_POSTS, payload: {userPosts}})


export const setPostsThunk = () => async (dispatch) => {
    const response = await postsApi.getPosts()
    console.log(response)
    dispatch(setPosts(response))
    // dispatch(setIsFetchingPosts(true))
}

export const setPostsUsersThunk = () => async (dispatch) => {
    const response = await postsApi.getPostsUsers()
    console.log(response)
    dispatch(setPostsUsers(response))
}

export const setUserDataThunk = (userId) => async (dispatch) => {
    const response = await postsApi.getPostsUser(userId)
    console.log(response)
    dispatch(setUserData(response))
}

export const setUserPostsThunk = (userId) => async (dispatch) => {
    const response = await postsApi.getUserPosts(userId)
    console.log(response)
    dispatch(setUserPosts(response))
}

export default postsReducer