import { CHANGE_NAME } from "../actions/changeNameAction.js";
import { CHANGE_LAST_NAME } from "../actions/changeLastNameAction.js";

const INITIAL_STATE = {
  name: 'Rodrigo',
  lastName: 'Santos da Silva',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_NAME:
    return {
      ...state,
      name: action.name,
    }
    case CHANGE_LAST_NAME:
    return {
      ...state,
      lastName: action.lastName,
    }
    default:
    return state;
  }
}

export default userReducer;