

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
      colors: state.colors,
      index: state.index < state.colors.length ? state.index + 1 : 0,
    }
    case PREVIOUS_COLOR:
    return { 
      colors: state.colors,
      index: state.index >  0 ? state.index - 1 : 0, 
    }
    default:
    return state;
  }
}

//Criação da store recebendo como parâmetro obrigatório o reducer para seu funcionamento
const store = Redux.createStore(reducer);

//Adiciona eventListener para nextBtn
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
  console.log('Antes', store.getState())
  store.dispatch(goToNextOrPreviousColor(NEXT_COLOR))
  console.log('Depois', store.getState())
})
//Adiciona eventListener para previousBtn
const previousBtn = document.getElementById('previous');
previousBtn.addEventListener('click', () => {
  console.log('Antes', store.getState())
  store.dispatch(goToNextOrPreviousColor(PREVIOUS_COLOR))
  console.log('Depois', store.getState())
})
