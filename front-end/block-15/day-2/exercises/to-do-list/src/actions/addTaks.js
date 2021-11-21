const ADD_TASK = 'ADD_TASK';

const createTask = (nameTask) => {
  return {
    type: ADD_TASK,
    nameTask,
  }
}

export { ADD_TASK, createTask }