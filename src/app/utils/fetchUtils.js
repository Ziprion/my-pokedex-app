import axios from 'axios';

// const isDev = process.env.NODE_ENV === 'development';
// isDev ? 'http://localhost:3000' : 'https://my-json-server.typicode.com/Ziprion/my-pokedex-app';
const pathApi = 'http://localhost:3000';
const limit = 20;

export const getPokemonsByPage = (page) => axios.get(`${pathApi}/pokemons?_page=${page}&_limit=${limit}`);
export const fetchPokemonById = (id) => axios.get(`${pathApi}/pokemons/${id}`);
