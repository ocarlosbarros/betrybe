const INITIAL_STATE_2 = {
  name: 'Bruna',
  lastName: 'Santana Oliveira',
  address: 'Rua Holanda, 332',
  city: 'São Paulo',
};

const secondReducer = (state = INITIAL_STATE_2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default secondReducer;