import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */ /* eslint no-unused-vars: 0  */

export const pokemonsStateSlice = createSlice({
  name: 'pokemonsStateSlice',
  initialState: {
    pokemons: [],
    caughtPokemons: [],
    sortedBy: 'idAsc',
    nextPage: 1,
    isPagination: true,
    searchText: '',
    typing: false,
  },
  reducers: {
    addPokemons: (state, { payload }) => {
      state.pokemons = [...state.pokemons, ...payload];
      state.nextPage += 1;
    },
    catchPokemon: (state, { payload }) => {
      state.caughtPokemons.push(payload);
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
    syncCaughtPokemons: (state, { payload }) => {
      state.caughtPokemons = payload;
    },
    cleanCaughtPokemons: (state) => {
      state.caughtPokemons = [];
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
  syncCaughtPokemons,
  cleanCaughtPokemons,
} = pokemonsStateSlice.actions;

export default pokemonsStateSlice.reducer;
