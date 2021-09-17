import React, { Component } from 'react';

import colors from './data';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filterText:'',
    };

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event){
    this.setState({
      filterText: event.target.value,
    });
  }

  render(){
    const { filterText } = this.state;

    return (
      <main>
        <input type="text" name="" id="" value={ filterText } onChange={ this.handleChange }/>
        <h1>Colors</h1>
        <ul>
        { colors
        .filter(({ name }) => name.includes(filterText))
        .map(({ name, hex }) => (
        <li key={ hex }>
          <div className="color-display" style={ { backgroundColor: hex } } />
          { name }
          </li>
        ))}
        </ul>
      </main>
      );
  };
}

export default App;

/**
 * @author Carlos Barros
 * @version 1.0.0
 * @since 09/09/2021
 */