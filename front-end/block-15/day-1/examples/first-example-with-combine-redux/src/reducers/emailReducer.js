import { CREATE_EMAIL } from '../actions/createEmail.js';

const INITIAL_STATE = {
  email:'',
}

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EMAIL:
      return {
        ...state,
        email:action.email,
      }
    default:
    return state;
  }
}

export default emailReducer;