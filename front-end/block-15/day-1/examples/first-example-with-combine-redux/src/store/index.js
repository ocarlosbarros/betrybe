import { createStore } from 'redux';
import rootReducers from '../reducers/rootReducer.js';

const store = createStore(rootReducers);

export { store };