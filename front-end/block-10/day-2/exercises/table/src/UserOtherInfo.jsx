import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserOtherInfo extends Component {
  render() {
    const { email, avatar } = this.props;
    return(
      <div>
        <p><span>Email: </span>{ email }</p>
        <img src={ avatar } alt="" />
      </div>
    );
  }
}

UserOtherInfo.propTypes = {
  email: PropTypes.string,
  avatar: PropTypes.string,
}

export default UserOtherInfo;
