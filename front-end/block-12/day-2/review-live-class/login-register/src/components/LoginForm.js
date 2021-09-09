import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
      email:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({email: event.target.value});
  }
  render(){
    const {email} = this.state;
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <input 
            value={ email } 
            type="email" 
            name="email" 
            id="email"
            onChange={ this.handleChange }
            />
          </label>
        </form>
      </section>
    );
  }
}

export default LoginForm;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 09/09/2021
 */