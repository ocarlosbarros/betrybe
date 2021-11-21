import { createStore } from 'redux';
import rootReducers from '../reducers/rootReducer.js';

const store = createStore(rootReducers);

//Adiciona um listener que executará uma callback toda vez que uma action é disparada
store.subscribe(() => {
  console.log(store.getState());
});

export { store };