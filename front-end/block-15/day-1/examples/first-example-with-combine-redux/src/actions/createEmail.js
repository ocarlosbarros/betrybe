const CREATE_EMAIL = 'CREATE_EMAIL';

const createEmailAction = (email) => {
  return {
    type:CREATE_EMAIL,
    email
  }
}

export { createEmailAction, CREATE_EMAIL }