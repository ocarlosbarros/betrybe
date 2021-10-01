import React, { Component } from 'react';

class Button extends Component {
  render(){
    const { name, value, onClick } = this.props;
    const id = `${name}-id`
    const labelFor = `${name}-label`
    return(
      <label htmlFor={ labelFor }>
        <input type="submit" name={ name } id={ id } value={ value } onClick={ onClick } />
      </label>
    );
  }
}

export default Button;