const CHANGE_NAME = 'CHANGE_NAME';

const changeNameAction = (name) => {
  return {
    type:CHANGE_NAME,
    name,
  }
}

export { changeNameAction, CHANGE_NAME };