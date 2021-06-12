import axios from 'axios';

// const webApi = 'https://my-json-server.typicode.com/ziprion/my-pokedex-app';
const localApi = 'http://localhost:3000';
const limit = 20;

export const getPokemonsByPage = (page) => axios.get(`${localApi}/pokemons?_page=${page}&_limit=${limit}`);
export const fetchPokemonById = (id) => axios.get(`${localApi}/pokemons/${id}`);
