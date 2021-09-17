import React, { Component } from 'react'
import './App.css';

{/*
function handleClick() {
  console.log('Clicou');
}
*/
}
class App extends Component {
  constructor(){
    super();
    console.log('Componente sendo construído');
  }

  handleClick(){
    console.log('Clicou');
  }

  render(){
    return (
    <button onClick={ this.handleClick }>Meu botão</button>
    );
  }
}

export default App;
