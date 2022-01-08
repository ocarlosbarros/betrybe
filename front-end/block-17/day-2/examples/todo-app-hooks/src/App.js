import React, { Component } from 'react';
import ListTasks from './components/ListTasks';
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList:[]
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task){
    this.setState((prevState) => ({ taskList: [...prevState.taskList, task] }))
  }

  render() {
  const { taskList } = this.state;

  return (
    <main className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm addTask={ this.addTask }/>
      <ListTasks tasks={ taskList }/>
    </main>
    );
  }
}
export default App;
