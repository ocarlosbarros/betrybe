import React, { Component } from 'react';
import InheritanceContext from '../contexts/Inheritance';

 class Daugther extends Component {
  render() {
   return(
     <section>
       <h2>Eu sou uma filha</h2>
       <InheritanceContext.Consumer>
         { (value) => {
           return (
           <>
           <p>Tenho uma herança de R$ { value.inheritance.toFixed(2) }</p>
           <button onClick={ () => value.spendInheritance(100000) }>Gastar</button>
           </>);
        }}
       </InheritanceContext.Consumer>
     </section>
   ); 
  }
}

export default Daugther;
