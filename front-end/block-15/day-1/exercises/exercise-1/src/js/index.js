const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer =( state = INITIAL_STATE ) => {
  switch('action'){
    default:
    return state;
  }
}

const store = Redux.createStore(reducer);
