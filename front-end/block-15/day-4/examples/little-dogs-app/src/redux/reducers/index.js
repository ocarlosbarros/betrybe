import { combineReducers } from 'redux';
import  reducer  from './reducer';


const rootReducer = combineReducers({
  dogs:reducer,
})

export default rootReducer;