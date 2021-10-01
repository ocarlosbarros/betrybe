import React, { Component } from 'react';

import Button from './Button';
import Input from './Input';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:'',
      emailList:[]
    }
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({
    [name]:value
  })
}

  onSubmitForm = (e) => {
    e.preventDefault();
    const { onChange } = this.props;
    const { emailList }  = this.state;
    this.setState(this.setState(({ emailList }) => ({
      emailList: 
      [
      ...emailList,
      e.target[0].value
      ]
    })), () => {
      onChange({ emailList });
  });
}

  render(){
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.onSubmitForm }>
        <Input type="email" name="email" value={ email } onChange={ this.handleChange } />
        <Input type="password" name="password" value={ password } onChange={ this.handleChange } />
        <Button value="Login" />
      </form>
      
    );
  }
}

export default LoginForm;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 09/09/2021
 */