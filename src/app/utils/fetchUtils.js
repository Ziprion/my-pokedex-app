import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const pathApi = isDev ? 'http://localhost:3000' : 'api/v1';
const limit = 20;

export const getPokemonsByPage = (page) => axios.get(`${pathApi}/pokemons?_page=${page}&_limit=${limit}`);
export const fetchPokemonById = (id) => axios.get(`${pathApi}/pokemons/${id}`);
