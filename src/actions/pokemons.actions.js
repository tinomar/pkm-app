import { SET_POKEMON, SET_POKEMONS } from '../reducers/pokemons.reducer';
import { SET_LOADING } from '../reducers/loaders.reducer';
import {getPokemon, getPokemons}  from '../serviceUtils';

 export const loadPokemonAction = (id) => async (dispatch) => {
	 try {
		dispatch({type: SET_LOADING, payload: true});
		const pokemon = await getPokemon(id);		
		dispatch({type: SET_POKEMON, payload: pokemon});		
	} catch (e) {
		console.log(e);
		dispatch({type: SET_POKEMON, payload: null});	
	} finally {
		dispatch({type: SET_LOADING, payload: false});
	}
 }
 
 export const loadPokemonsAction = (limit) => async (dispatch) => {
	 try {
		dispatch({type: SET_LOADING, payload: true});
		const pokemons = await getPokemons(limit);
		dispatch({type: SET_POKEMONS, payload: pokemons});		
	} catch (e) {
		console.log(e);
	} finally {
		dispatch({type: SET_LOADING, payload: false});
	}
 }
 