import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./reducers/auth-reducer";
import ownProfileReducer from "./reducers/ownProfile-reducer";
import newsReducer from "./reducers/news-reducer";
import postsReducer from "./reducers/posts-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    authReducer,
    ownProfileReducer,
    newsReducer,
    postsReducer,
    usersReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)
