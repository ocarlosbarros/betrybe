

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

//Definindo action types
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';


//Criação do reducer
const reducer =( state = INITIAL_STATE ) => {
  switch('action'){
    default:
    return state;
  }
}

//Criação da store recebendo como parâmetro obrigatório o reducer para seu funcionamento
const store = Redux.createStore(reducer);
