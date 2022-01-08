import React from 'react';
import ListTasks from './components/ListTasks';
import TaskForm from './components/TaskForm';
import TaskProvider from './context/TaskProvider';

function App(){
  return (
    <main className="App">
      <h1>Lista de Tarefas</h1>
      <TaskProvider>
        <TaskForm />
        <ListTasks />
      </TaskProvider>
    </main>
    );
}

export default App;
