import React, { Component } from 'react'
import Daugther from './Daugther';

 class Father extends Component {
   render() {
    const { inheritance, spendInheritance } = this.props;
    return (
      <section>
        <h2>Eu sou o pai</h2>
        <Daugther inheritance={ inheritance } spendInheritance={ spendInheritance } />
      </section>
    )
  }
}

export default Father;