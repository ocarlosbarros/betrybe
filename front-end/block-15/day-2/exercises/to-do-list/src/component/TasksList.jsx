import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
class TasksList extends Component {
  render(){
    const { tasks } = this.props;
    console.log(tasks)
    return(
      <section>
        <h2>List of Tasks</h2>
        <ul>
        { tasks.map((task, index) => (
          <li key={ task + index }>{ task }</li>
        ))}
        </ul>
      </section>
    );
  }
}

TasksList.propTypes = {
  task:PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  tasks:state.listReducer
});
export default connect(mapStateToProps, null)(TasksList);