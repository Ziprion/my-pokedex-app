import axios from 'axios';
import _ from 'lodash';

const isDev = process.env.NODE_ENV === 'development';
const pathApi = isDev ? 'http://localhost:3000' : '/api/v1';
export const limit = 20;

const fetchPokemons = (page, query, attr, order) => axios.get(`${pathApi}/pokemons?q=${query}&_page=${page}&_limit=${limit}&_sort=${attr}&_order=${order}`);
const normalizedQuery = (query) => _.trimStart(query, '#');

export const mappingFetchPokemons = {
  idAsc: (page, query) => fetchPokemons(page, normalizedQuery(query), 'id', 'asc'),
  idDesc: (page, query) => fetchPokemons(page, normalizedQuery(query), 'id', 'desc'),
  nameAsc: (page, query) => fetchPokemons(page, normalizedQuery(query), 'name', 'asc'),
  nameDesc: (page, query) => fetchPokemons(page, normalizedQuery(query), 'name', 'desc'),
};

export const fetchPokemonById = (id) => axios.get(`${pathApi}/pokemons?id=${id}`);

export const fetchData = () => (
  axios({
    method: 'post',
    url: '/api/v1/data',
    data: { token: localStorage.token },
    timeout: 4000,
  })
);

export const fetchCatch = (pokemon) => axios({
  method: 'post',
  url: '/api/v1/catchPokemon',
  data: { ...pokemon, token: localStorage.token },
  timeout: 4000,
});

export const fetchLogin = (data) => axios({
  method: 'post',
  url: '/api/v1/login',
  data,
  timeout: 4000,
});
