import { changeNameAction } from "./actions/changeNameAction.js";
import { changeLastNameAction } from "./actions/changeLastNameAction.js";
import { changeAddressAction } from "./actions/changeAddressAction.js";
import { changeCityAction } from "./actions/changeCityAction.js";
import store from "./store/index.js";


window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeNameAction('Bruce'));
    store.dispatch(changeLastNameAction('Prince'));

    store.dispatch(changeAddressAction('Maple Street, Brooklyn'));
    store.dispatch(changeCityAction('Gotham City'));
  }, 3000);
};

