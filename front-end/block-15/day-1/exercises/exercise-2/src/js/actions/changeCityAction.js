const CHANGE_CITY = 'CHANGE_CITY';

const changeCityAction = (city) => {
  return {
    type:CHANGE_CITY,
    city,
  }
}

export { changeCityAction, CHANGE_CITY };