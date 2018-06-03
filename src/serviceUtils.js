import axios from 'axios';



export const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;	
	const data = await axios(url);
	return data && data.data && data.data;
}

export const getPokemons = async (limit=10) => {	
	const data = await axios.get('https://pokeapi.co/api/v2/pokemon',
	{
		params: {
			limit
		}
	});
	return data && data.data && data.data.results;
}
