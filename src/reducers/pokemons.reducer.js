export const SET_POKEMONS = 'SET_POKEMONS';
export const SET_POKEMON = 'SET_POKEMON';

const initialState = {
	pokemons: [],
	selectedPokemon: null
}


export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_POKEMON:
      return {...state, selectedPokemon: action.payload};
    case SET_POKEMONS:
      return {...state, pokemons: action.payload};
    default:
      return state;
  }
}