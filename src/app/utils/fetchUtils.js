import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development';
const pathApi = isDev ? 'http://localhost:3000' : '/api/v1';
export const limit = 20;

const fetchPokemons = (page, query, attr, order) => axios.get(`${pathApi}/pokemons?q=${query}&_page=${page}&_limit=${limit}&_sort=${attr}&_order=${order}`);

export const mappingFetchPokemons = {
  idAsc: (page, query) => fetchPokemons(page, query, 'id', 'asc'),
  idDesc: (page, query) => fetchPokemons(page, query, 'id', 'desc'),
  nameAsc: (page, query) => fetchPokemons(page, query, 'name', 'asc'),
  nameDesc: (page, query) => fetchPokemons(page, query, 'name', 'desc'),
};

export const fetchPokemonById = (id) => axios.get(`${pathApi}/pokemons?id=${id}`);
