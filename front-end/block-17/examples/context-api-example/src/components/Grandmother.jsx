import React, { Component } from 'react'
import Father from './Father';

class Grandmother extends Component {
  render() {
    const { inheritance, spendInheritance } = this.props;
    return (
      <section>
        <h2>Eu sou a avó</h2>
        <Father inheritance={ inheritance } spendInheritance={ spendInheritance } />
      </section>
    )
  }
}

export default Grandmother;
