import axios from 'axios';

const isVercel = true;
const pathApi = isVercel ? 'https://my-json-server.typicode.com/Ziprion/my-pokedex-app' : 'http://localhost:3000';
const limit = 20;

export const getPokemonsByPage = (page) => axios.get(`${pathApi}/pokemons?_page=${page}&_limit=${limit}`);
export const fetchPokemonById = (id) => axios.get(`${pathApi}/pokemons/${id}`);
