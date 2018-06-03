import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons.reducer';
import { loadersReducer } from './loaders.reducer';

export default combineReducers({
	pokemons: pokemonsReducer,
	loaders: loadersReducer
});