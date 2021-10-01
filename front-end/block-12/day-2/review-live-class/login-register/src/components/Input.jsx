import React, { Component } from 'react';

class Input extends Component {

  capitalize( textLabel ) {
    const lower = textLabel.toLowerCase();
    return textLabel.charAt(0).toUpperCase() + lower.slice(1);
  }

  render(){
    const { type, name, value, onChange } = this.props;
    const id = `${name}-id`
    const labelFor = `${name}-label`
    return(
      <label htmlFor={ labelFor } >
        { `${this.capitalize(name)} : ` }
        <input type={ type } name={ name } id={ id } value={ value } onChange={ onChange } />
      </label>
    );
  }
}

export default Input;