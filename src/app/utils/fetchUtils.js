import axios from 'axios';

const webApi = 'https://my-json-server.typicode.com/ziprion/my-pokedex-app';
const localApi = 'http://localhost:3000';
const limit = 20;
export const getPokemonsByPage = (page) => axios.get(`${webApi}/pokemons?_page=${page}&_limit=${limit}`);

// await axios({
//   method: 'patch',
//   url: 'http://localhost:3000/pokemons/1',
//   headers: { 'Content-Type': 'application/json' },
//   data: {
//     catched: true,
//   },
// });
