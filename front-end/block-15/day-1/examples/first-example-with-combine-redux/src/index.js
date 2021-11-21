import { store } from './store/index.js'
import { createNameAction } from './actions/createName.js'
import { createEmailAction } from './actions/createEmail.js'

console.log(store.getState());
store.dispatch(createNameAction('Bruce Wayne'));
console.log(store.getState());
store.dispatch(createEmailAction('bruce@wayne.com'));
console.log(store.getState());