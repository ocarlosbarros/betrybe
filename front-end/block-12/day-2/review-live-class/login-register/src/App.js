import React, { Component } from 'react';

import LoginForm from './components/LoginForm';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      emails:[]
    }
  }
  handleChange =  ({ emailList }) => {
   this.setState((prevState) => ({
    emails:[
      ...prevState.emails,
      emailList
    ]
   }));
  }
  render(){
    const { emails } = this.state;
    return (
      <main className="App">
        <LoginForm onChange={ this.handleChange } />
        <ul>
          { emails.length ? emails.map(email => ( 
          <li key={ email } >
            { email }
          </li>)) : undefined
          }
        </ul>
      </main>
      );
  }
}

export default App;
