import { combineReducers } from 'redux'
import firstReducer from "../reducers/firstReducer.js";
import secondReducer from "../reducers/secondReducer.js";

const rootReducer = combineReducers({ firstReducer, secondReducer })

export default rootReducer;