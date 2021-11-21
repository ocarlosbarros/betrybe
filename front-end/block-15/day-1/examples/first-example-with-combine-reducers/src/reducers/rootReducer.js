import { combineReducers } from "redux";
import nameReducer from "./nameReducer.js";
import emailReducer from "./emailReducer.js";

const rootReducers = combineReducers({
  name: nameReducer,
  email:emailReducer,
});

export default rootReducers;