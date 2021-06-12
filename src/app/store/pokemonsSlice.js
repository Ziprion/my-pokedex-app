import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */

export const pokemonsSlice = createSlice({
  name: 'pokemonsInfo',
  initialState: {
    pokemons: [],
    catchedPokemons: [],
    loading: true,
    page: 2,
  },
  reducers: {
    initialPokemons: (state, { payload }) => {
      state.pokemons = payload;
    },
    loadPokemons: (state, { payload }) => {
      state.pokemons = [...state.pokemons, ...payload];
      state.page += 1;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    catchPokemon: (state, { payload }) => {
      state.catchedPokemons.push({ id: payload, catchedAt: new Date().toLocaleDateString() });
    },
  },
});

export const {
  initialPokemons,
  loadPokemons,
  stopLoading,
  catchPokemon,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
