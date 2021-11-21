const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';

const changeLastNameAction = (lastName) => {
  return {
    type:CHANGE_LAST_NAME,
    lastName,
  }
}

export { changeLastNameAction, CHANGE_LAST_NAME };