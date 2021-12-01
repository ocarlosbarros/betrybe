import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDog } from '../redux/actions';
import './Card.css'

class Card extends Component {
    render(){
    const { fetchDog, src, isFetching } = this.props;
    console.log(src)
    return(
      <section className="card">
        <img src={ src } alt="dog" />
        <button
        onClick={ fetchDog }
        >
          New Dog
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  src:state.imagePath,
  isFetching: state.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchDog:() => dispatch(fetchDog())});

export default connect(mapStateToProps, mapDispatchToProps)(Card);