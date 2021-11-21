const CREATE_NAME = 'CREATE_NAME';

const createNameAction = (name) => {
  return {
    type:CREATE_NAME,
    name,
  }
}

export { createNameAction, CREATE_NAME  }