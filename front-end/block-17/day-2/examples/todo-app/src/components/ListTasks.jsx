import React, { Component } from 'react';

class ListTasks extends Component {
  render(){
    const { tasks } = this.props;
    return(
      <section class="task-list">
        <h2>Tarefas:</h2>
        <ul>
          { tasks.map((task, index) => (
            <li key={`${index}-${task}`}>{ task }</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ListTasks;