import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */ /* eslint no-unused-vars: 0  */

export const pokemonsStateSlice = createSlice({
  name: 'pokemonsStateSlice',
  initialState: {
    pokemons: [],
    catchedPokemons: [],
    sortedBy: 'idAsc',
    nextPage: 1,
    isPagination: true,
    searchText: '',
    typing: false,
    isFetching: false,
  },
  reducers: {
    addPokemons: (state, { payload }) => {
      state.pokemons = [...state.pokemons, ...payload];
      state.nextPage += 1;
    },
    catchPokemon: (state, { payload: { id, name } }) => {
      state.catchedPokemons.push({ id, name, catchedAt: new Date().toLocaleDateString() });
    },
    changeSortedBy: (state, { payload }) => {
      state.sortedBy = payload;
      state.pokemons = [];
      state.nextPage = 1;
      state.isPagination = true;
    },
    stopPagination: (state) => {
      state.isPagination = false;
    },
    setSearchingText: (state, { payload }) => {
      state.searchText = payload;
      state.pokemons = [];
      state.nextPage = 1;
      state.isPagination = true;
      state.typing = true;
    },
    stopTyping: (state) => {
      state.typing = false;
    },
    setFetching: (state, { payload }) => {
      state.isFetching = payload;
    },
  },
});

export const {
  addPokemons,
  catchPokemon,
  changeSortedBy,
  stopPagination,
  setSearchingText,
  stopTyping,
  setFetching,
} = pokemonsStateSlice.actions;

export default pokemonsStateSlice.reducer;
