import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth-reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    authReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store