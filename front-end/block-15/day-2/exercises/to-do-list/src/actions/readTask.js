const READ_TASKS = 'READ_TASKS';

const readTask = (nameTask) => {
  return {
    type: READ_TASKS,
    nameTask,
  }
}

export { READ_TASKS, readTask }