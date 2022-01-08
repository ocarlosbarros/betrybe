import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function ListTasks({ tasks }){
  const { taskList } = useContext(TaskContext);

  return(
    <section class="task-list">
      <h2>Tarefas:</h2>
      <ul>
        { taskList.map((task, index) => (
          <li key={`${index}-${task}`}>{ task }</li>
        ))}
      </ul>
    </section>
  );
}

export default ListTasks;