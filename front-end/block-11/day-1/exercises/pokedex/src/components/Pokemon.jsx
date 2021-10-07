import React, { Component } from 'react';

import './Pokemon.css'
class Pokemon extends Component {
  render(){
    const { pokemon: { name, type, averageWeight: { value, measurementUnit },  image, moreInfo } } = this.props;
    return(
      <section className="card-pokemon flex">
        <div className="info-container">
          <h2>{ name }</h2>
          <p>{ type }</p>
          <p>Average weight: { value } { measurementUnit }</p>
        </div>
        <div className="img-container">
          <img src={ image } alt={ moreInfo } />
        </div>
      </section>
    );
  }
}

export default Pokemon;