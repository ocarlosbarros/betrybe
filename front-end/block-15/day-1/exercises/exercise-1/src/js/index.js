

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

//Definindo action types
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const goToNextOrPreviousColor = (typeName) => {
  return { type: typeName }
} 

//Criação do reducer
const reducer =( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case NEXT_COLOR:
    return { 
      ...state,
      index: index < state.colors.length && state.index + 1
    }
    case PREVIOUS_COLOR:
    return { 
      ...state,
      index: index < state.colors.length && state.index - 1
    }
    default:
    return state;
  }
}

//Criação da store recebendo como parâmetro obrigatório o reducer para seu funcionamento
const store = Redux.createStore(reducer);

console.log(store.getState())