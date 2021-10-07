import React, { Component } from 'react';

import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render(){
    return(
      <section>
        <h1>Pokedex</h1>
        { pokemons.map(( pokemon ) => {
        const { id } = pokemon;
        return <Pokemon key={ id } pokemon={ pokemon } />  
        })
        }
      </section>
    );
  }
}

export default Pokedex