import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({  target: { value } }){
    this.setState({ taskName: value })
  }

  handleClick(){
    const { taskName } = this.state;
    const { addTask } = this.props;
    addTask(taskName);
    this.setState({ taskName: ''})
  }

  render(){
    const { taskName } = this.state;
  return(
    <form>
    <label htmlFor="taskName">
      <input type="text" name="taskName" id="" value={ taskName } onChange={ this.handleChange }/>
    </label>
    <button type="button" onClick={ this.handleClick }>Adicionar Tarefa</button>
    </form>
    );
  }
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default TaskForm;