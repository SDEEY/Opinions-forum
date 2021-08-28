import {newsApi} from "../../api/api";

const SET_NEWS = 'SET_NEWS'
const SET_NEW_NEWS = 'SET_NEW_NEWS'

let initialState = {
    news: null,
    newNews: [],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.payload.news.filter(a => a.content && a.description && a.publishedAt && a.title)
            }
        case SET_NEW_NEWS:
            return {
                ...state,
                news: state.news.concat(action.payload.newNews.filter(a => a.content && a.description && a.publishedAt && a.title))
            }
        default:
            return state
    }
}

const setNews = (news) => ({type: SET_NEWS, payload: {news}})
export const setNewNews = (newNews) => ({type: SET_NEW_NEWS, payload: {newNews}})

export const setNewsThunk = (countryNews, categoryNews, numberOfPage) => async (dispatch) => {
    const response = await newsApi.getNews(countryNews, categoryNews, numberOfPage)
    console.log(response)
    response.status === 'ok' ? dispatch(setNews(response.articles)) : alert(response.message)
}

export const setNewNewsThunk = (countryNews, categoryNews, numberOfPage) => async (dispatch) => {
    const response = await newsApi.getNews(countryNews, categoryNews, numberOfPage)
    console.log(response)
    response.status === 'ok' ? dispatch(setNewNews(response.articles)) : alert(response.message)
}

export default newsReducer