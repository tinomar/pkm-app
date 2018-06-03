import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';
import {loadPokemonAction} from './actions/pokemons.actions';
import './PokemonDetail.css';

class PokemonDetail extends Component {
  componentWillMount(){
	  this.props.loadPokemonAction(this.props.match.params.name);
  }
  
  getPokemonDetail = (pokemon) => {
	 return (
		<div className="detail-page__info">
			<h3>{pokemon.name}</h3>
			<img src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name}/>
		</div>
	 );
  } 
	
  render() {
	const {pokemon} = this.props;
    return this.props.isLoading ? <div className="loader"></div> :
	(<div className="detail-page">
		<div className="detail-page__header">
			<h2>Pokemon detail</h2>
			<Link className="button button__back" to={`/`}>&laquo; Back</Link>
		</div>
		{this.getPokemonDetail(pokemon)}				
	</div>
	);
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemons.selectedPokemon || {},
  isLoading: state.loaders.isLoading
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({loadPokemonAction}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)