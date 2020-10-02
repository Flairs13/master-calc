import mainPageReducer from "./Main-page-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({mainPageReducer})

let store = createStore(reducers)
window.store = store

export default store