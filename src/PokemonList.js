import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {loadPokemonsAction} from './actions/pokemons.actions';
import './PokemonList.css';

class PokemonList extends Component {
  componentWillMount(){
	  this.props.loadPokemonsAction(9);
  }
  
  renderPokemons = (pokemons) => {
	  return (
	  <ul className="list">
	  {
		 pokemons.map((pokemon, index) => 
		 (<li className="list__item" key={index}>
			<Link to={`/detail/${pokemon.name}`}>#{index + 1} {pokemon.name}</Link>	
		 </li>))
	  }
	  </ul>);
  }
	
  render() {
    return this.props.isLoading ?
		<div class="loader"></div> :
		(<div className="PokemonList">
			{this.renderPokemons(this.props.pokemons)}
		</div>);
	}
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  isLoading: state.loaders.isLoading
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({loadPokemonsAction}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)