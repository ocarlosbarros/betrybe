import React, { Component } from 'react';
import Grandmother from './Grandmother';
import InheritanceContext from '../contexts/Inheritance';

class GreatGranmother extends Component {
  constructor(props){
    super(props);
    this.state = {
      inheritance:1000000000,
    }
    this.handleSpendInheritance = this.handleSpendInheritance.bind(this);
  };

  handleSpendInheritance(spendValue){
    this.setState((prevState) => ({
      inheritance: prevState.inheritance - spendValue,
    }));
  }

  render(){
    const { inheritance } = this.state;
    const { handleSpendInheritance } = this;
    return (
      <InheritanceContext.Provider value={ { inheritance, spendInheritance: handleSpendInheritance } }>
        <section>
          <h2>Eu sou a bisavó!</h2>
          <Grandmother/>
        </section>
      </InheritanceContext.Provider>
    );
  }
}

export default GreatGranmother;