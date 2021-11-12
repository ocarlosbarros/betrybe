const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

//Constantes da aplicação
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const FIRST_ELEMENT_IN_LIST = ist = 0
const NEXT_OR_PREVIOUS_ELEMENT = 1; 

const goToNextOrPreviousColor = (typeName) => {
  return { type: typeName }
} 

function createColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let color = '#';
  const random = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    color += oneChar[random()];
  }
  return color;
}

//Criação do reducer
const reducer =( state = INITIAL_STATE, action ) => {
  const LAST_ELEMENT_IN_LIST = state.colors.length - 1;
  
  switch(action.type){
    case NEXT_COLOR:
      return { 
        colors: state.colors,
        index: state.index < LAST_ELEMENT_IN_LIST ? state.index + NEXT_OR_PREVIOUS_ELEMENT : FIRST_ELEMENT_IN_LIST,
    }
    case PREVIOUS_COLOR:
    return { 
      colors: state.colors,
      index: state.index >  0 ? state.index - NEXT_OR_PREVIOUS_ELEMENT : FIRST_ELEMENT_IN_LIST, 
    }
    case RANDOM_COLOR:
    const color = createColor();
    return {
      colors:[...state.colors, color],
      index:0,
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
  store.dispatch(goToNextOrPreviousColor(NEXT_COLOR));
});

//Adiciona eventListener para previousBtn
const previousBtn = document.getElementById('previous');
previousBtn.addEventListener('click', () => {
  store.dispatch(goToNextOrPreviousColor(PREVIOUS_COLOR));
});

//Adiciona eventListener para randomBtn
const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', () => {
  store.dispatch(goToNextOrPreviousColor(RANDOM_COLOR));
    console.log('random', store.getState());
})



const showColor = (color) => {
  const colorValue = document.getElementById('value')
  colorValue.innerText = color;
}

//Adiciona subscribe
store.subscribe(() => {
  const { colors, index } = store.getState()
  showColor(colors[index]);
});
