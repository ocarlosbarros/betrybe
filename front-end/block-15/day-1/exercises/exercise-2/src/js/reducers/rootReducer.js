import userReducer from './userReducer.js';
import addressReducer from './addressReducer.js';

const rootReducer = Redux.combineReducers({
  user:userReducer,
  address:addressReducer,
});

export default rootReducer;