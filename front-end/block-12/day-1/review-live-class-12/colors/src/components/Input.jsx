import React from 'react';

class Input extends React.Component {
  render(){
    const { tipoDoInput, onChangeOfInput} = this.props;
    return(
      <label htmlFor="">
        <input type={ tipoDoInput } onChange={ onChangeOfInput } value="" />
      </label>
    )
  }
}

export default Input;