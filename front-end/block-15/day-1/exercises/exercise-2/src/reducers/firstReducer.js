const INITIAL_STATE_1 = {
  name: 'Rodrigo',
  lastName: 'Santos da Silva',
  address: 'Rua Soldado Mathias, 765',
  city: 'Belo Horizonte',
};

const firstReducer = (state = INITIAL_STATE_1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default firstReducer;