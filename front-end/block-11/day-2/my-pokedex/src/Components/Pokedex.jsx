import './Pokedex.css'
import React, { Component } from 'react';
import Pokemon from './Pokemon';


class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <section>
        <h1>Pokedex</h1>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon_details={pokemon} />)}
      </section>
    );
  }
}

export default Pokedex;