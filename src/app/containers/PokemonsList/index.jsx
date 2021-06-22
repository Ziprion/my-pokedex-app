import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCatch } from '@utils/fetchUtils';
import { catchPokemon } from '@store/pokemonsStateSlice';
import { useAuth } from '@hooks/useAuth.jsx';

import PokemonItem from '@components/PokemonItem';

const PokemonsList = ({ pokemons }) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { caughtPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCaughtById = (id) => caughtPokemons.find((pokemon) => pokemon.id === id);

  const handleClick = (id, name) => async (e) => {
    e.preventDefault();
    const pokemon = { id, name, caughtAt: new Date().toLocaleDateString() };

    if (auth.status) {
      try {
        const { data } = await fetchCatch(pokemon);
        dispatch(catchPokemon(data));
      } catch (err) {
        console.log(err);
      }
    } else {
      dispatch(catchPokemon(pokemon));
    }
  };

  return (
    <>
      {pokemons.map(({ id, name }) => (
        <PokemonItem
          key={id}
          id={id}
          name={name}
          caught={isCaughtById(id)}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default PokemonsList;
