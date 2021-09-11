import React, { Component } from 'react';

import Input from './components/Input';

import colors from './data';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue:'',
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue:event.target.value,
    });
  }

  render(){
    const { inputValue } = this.state;
    return (
      <main>
        {/* <input type="text" onChange={ (event) => this.handleChange(event) }/> */}
        <Input tipoDoInput="text" onChangeOfInput={ this.handleChange }/>
          <ul>
            {
            colors
            .filter(({ color }) => color.includes(inputValue))
            .map(({ color, value }) => 
            <li key={ value }>
              <div className="square-color" style={{ background: value }}/>
              { color } - { value }
            </li>)
            }
          </ul>
        </main>
      );
  }
}

export default App;
