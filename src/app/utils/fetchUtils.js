import axios from 'axios';

const limit = 20;
export const getPokemonsByPage = (page) => axios.get(`http://localhost:3000/pokemons?_page=${page}&_limit=${limit}`);

// await axios({
//   method: 'patch',
//   url: 'http://localhost:3000/pokemons/1',
//   headers: { 'Content-Type': 'application/json' },
//   data: {
//     catched: true,
//   },
// });
