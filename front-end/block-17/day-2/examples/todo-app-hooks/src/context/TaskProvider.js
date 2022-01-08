import React, { useState } from 'react';
import  TaskContext  from './TaskContext';

function TaskProvider({ children }) {
  const [taskList, setTaskList ] = useState([]);
  
  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  return(
    <TaskContext.Provider value={ { taskList, addTask } }>
      { children }
    </TaskContext.Provider>
  );
}

export default TaskProvider;