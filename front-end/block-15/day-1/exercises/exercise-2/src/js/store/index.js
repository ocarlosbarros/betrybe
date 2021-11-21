import rootReducer from "../reducers/rootReducer.js";

const store = Redux.createStore(rootReducer);

const name_1 = document.getElementById('nome-1');
const last_name_2 = document.getElementById('sobrenome-2');

const city_1 = document.getElementById('cidade-1');
const address_2 = document.getElementById('endereco-2');


store.subscribe(() => {
  const state = store.getState();
  name_1.innerHTML = state.user.name;
  last_name_2.innerHTML = state.user.lastName;
  
  city_1.innerHTML = state.address.address;
  address_2.innerHTML = state.address.city;
});

export default store;