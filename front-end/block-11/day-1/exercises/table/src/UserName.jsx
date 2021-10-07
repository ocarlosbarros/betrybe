import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import './UserName.css'

class UserName extends Component {
  render(){
    const { name } = this.props;

    return (
      <span className='name'>{name}</span>
    );
  }
}

UserName.defaultProps = {
  name:'Stranger'
}

UserName.propTypes = {
  name:PropTypes.string.isRequired,
}

export default UserName;