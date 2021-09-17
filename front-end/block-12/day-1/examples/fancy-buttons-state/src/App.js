import React,{ Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numeroDeCliques:0
    }
  }
  
  handleClick(){
    //SetState funciona de forma assincrona por isso o uso de callback
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }
    ));
  }

  render() {
    return (
      <button onClick={ this.handleClick }>{ this.state.numeroDeCliques }</button>
    );
    };
}

export default App;
