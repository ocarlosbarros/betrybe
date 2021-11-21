import { store } from './store/index.js'
import { createNameAction } from './actions/createName.js'
import { createEmailAction } from './actions/createEmail.js'


store.dispatch(createNameAction('Bruce Wayne'));
store.dispatch(createEmailAction('bruce@wayne.com'));

