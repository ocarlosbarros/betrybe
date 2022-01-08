import React, { useState } from 'react';
import ListTasks from './components/ListTasks';
import TaskForm from './components/TaskForm';

function App(){
  const [taskList, setTaskList ] = useState([]);
  
  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  return (
    <main className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm addTask={ addTask }/>
      <ListTasks tasks={ taskList }/>
    </main>
    );
}

export default App;
