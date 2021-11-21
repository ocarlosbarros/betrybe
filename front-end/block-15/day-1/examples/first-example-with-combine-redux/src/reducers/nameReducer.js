import { CREATE_NAME } from "../actions/createName.js";
const INITIAL_STATE = {
  name:'',
}

const nameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NAME:
      return {
        ...state,
        name:action.name 
      };
  
    default:
    return state;
  }
}

export default nameReducer;