import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTask } from '../actions/addTaks';

class InputsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      textValue:'',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target: { value }}){
    this.setState({ textValue: value });
  }

  render(){
    const { addTask } = this.props;
    const { textValue } = this.state;
    return(
      <section>
        <input
        placeholder='Type your task'
        onChange={ this.handleChange }
        value={ textValue } 
        type="text" />

        <button onClick={ () => addTask(textValue) }>Add Task</button>
      </section>
    );
  }
}

InputsList.propTypes = {
  addTask:PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  addTask:(task) => dispatch(createTask(task)), 
})
export default connect(null, mapDispatchToProps)(InputsList);