const Redux = require('redux');

const LOGIN = 'LOGIN';

const doLogin = (email) => ({
  type: LOGIN,
  email
})


const INITIAL_STATE = {
  email: "", 
  login: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
    return {
      ...state,
      login:!state.login,
      email:action.email,
    };
    default:
    return state;
  }
};


const store = Redux.createStore(reducer);

console.log(store.getState());

store.dispatch(doLogin("bruce@wayne.com"));

console.log(store.getState());