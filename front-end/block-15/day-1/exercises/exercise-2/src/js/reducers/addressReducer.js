import { CHANGE_CITY } from "../actions/changeCityAction.js";
import { CHANGE_ADDRESS } from "../actions/changeAddressAction.js";

const INITIAL_STATE = {
  address: 'Rua Holanda, 332',
  city: 'São Paulo',
};


const addressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CITY:
    return {
      ...state,
      city: action.city,
    }
    case CHANGE_ADDRESS:
    return {
      ...state,
      address: action.address,
    }
    default:
    return state;
  }
}

export default addressReducer;