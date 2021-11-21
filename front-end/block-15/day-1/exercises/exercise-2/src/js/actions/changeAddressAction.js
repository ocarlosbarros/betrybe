const CHANGE_ADDRESS = 'CHANGE_ADDRESS';

const changeAddressAction = (address) => {
  return {
    type:CHANGE_ADDRESS,
    address,
  }
}

export { changeAddressAction, CHANGE_ADDRESS };