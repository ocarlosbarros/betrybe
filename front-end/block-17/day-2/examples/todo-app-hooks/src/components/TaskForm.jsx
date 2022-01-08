import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context/TaskContext';

function TaskForm(){
  const [ taskName, setTaskName] = useState('');
  const { addTask } = useContext(TaskContext);
  
  const handleChange = ({  target: { value } }) => {
    setTaskName(value)
  }

  const handleClick = () => {
    addTask(taskName);
    setTaskName('')
  }

  return(
  <form>
  <label htmlFor="taskName">
    <input type="text" name="taskName" id="" value={ taskName } onChange={ handleChange }/>
  </label>
  <button type="button" onClick={ handleClick }>Adicionar Tarefa</button>
  </form>
  );
}


TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default TaskForm;