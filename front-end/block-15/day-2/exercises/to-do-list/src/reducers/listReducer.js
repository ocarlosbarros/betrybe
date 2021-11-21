import { ADD_TASK } from '../actions/addTaks';
import { READ_TASKS } from '../actions/readTask';
const INITIAL_STATE = [];

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
    return [ ...state, action.nameTask ]
    case READ_TASKS:
    return state;
    default:
    return state;
  }
}

export default listReducer;