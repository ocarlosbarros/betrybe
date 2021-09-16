import React, { Component } from 'react';

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

export default UserOtherInfo;
