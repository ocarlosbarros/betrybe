import React, { Component } from 'react';
import InputsList from './component/InputsList';
import TasksList from './component/TasksList';

class App extends Component {
  render(){
    return(
      <main>
        <h1>To Do List</h1>
        <InputsList />
        <TasksList />
      </main>
    );
  };
}

export default App;
