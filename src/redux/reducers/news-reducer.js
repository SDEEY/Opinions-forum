import {newsApi} from "../../api/api";

const SET_NEWS = 'SET_NEWS'

let initialState = {
    news: 'qwe'
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.payload.news.filter(a => a.content && a.description && a.publishedAt && a.title)
            }
        default:
            return state
    }
}

const setNews = (news) => ({type: SET_NEWS, payload: {news}})

export const setNewsThunk = (numberOfPage) => async (dispatch) => {
    const response = await newsApi.getNews(numberOfPage)
    console.log(response)
    // dispatch(setNews(response.articles))
    response.status === 'ok' ? dispatch(setNews(response.articles)) : alert(response.message)
}

export default newsReducer