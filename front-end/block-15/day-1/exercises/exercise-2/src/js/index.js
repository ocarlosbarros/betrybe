import reducers from "./reducers";

const INITIAL_STATE_1 = {
  name: 'Rodrigo',
  lastName: 'Santos da Silva',
  address: 'Rua Soldado Mathias, 765',
  city: 'Belo Horizonte',
};

const INITIAL_STATE_2 = {
  name: 'Bruna',
  lastName: 'Santana Oliveira',
  address: 'Rua Holanda, 332',
  city: 'São Paulo',
};

const firstReducer = (state = INITIAL_STATE_1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const secondReducer = (state = INITIAL_STATE_2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

