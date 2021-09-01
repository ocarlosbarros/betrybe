import './Pokemon.css';
import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon_details;
    return (
      <div className="card-pokemon">
        <div>
          <p className="card-title">{name}</p>
          <p>{type}</p>
          <p>{`Awerage weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img className="img_pokemon" src={image} alt={moreInfo} />
      </div >
    );
  };
}

export default Pokemon;