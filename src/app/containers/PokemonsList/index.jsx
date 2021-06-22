import React from 'react'; /* eslint no-alert: 0 */
import { useSelector, useDispatch } from 'react-redux';

import { fetchCatch } from '@utils/fetchUtils';
import { catchPokemon, setFetching } from '@store/pokemonsStateSlice';
import { useAuth } from '@hooks/useAuth.jsx';

import PokemonItem from '@components/PokemonItem';

const PokemonsList = ({ pokemons }) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { caughtPokemons, isFetching } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCaughtById = (id) => caughtPokemons.find((pokemon) => pokemon.id === id);

  const handleClick = (id, name) => async (e) => {
    e.preventDefault();
    const pokemon = { id, name, caughtAt: new Date().toLocaleDateString() };

    if (!isFetching) {
      if (auth.status) {
        try {
          dispatch(setFetching(true));
          const { data } = await fetchCatch(pokemon);
          dispatch(catchPokemon(data));
          dispatch(setFetching(false));
        } catch (err) {
          console.log(err);
          alert('network error');
          dispatch(setFetching(false));
        }
      } else {
        dispatch(catchPokemon(pokemon));
      }
    }
  };

  return (
    <>
      {pokemons.map(({ id, name, caughtAt }) => (
        <PokemonItem
          key={id}
          id={id}
          name={name}
          caught={isCaughtById(id)}
          caughtAt={caughtAt}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default PokemonsList;
