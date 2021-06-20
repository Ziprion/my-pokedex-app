import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon } from '@store/pokemonsStateSlice';

import PokemonItem from '@components/PokemonItem';

const PokemonsList = ({ pokemons }) => {
  const dispatch = useDispatch();
  const { caughtPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCaughtById = (id) => caughtPokemons.find((pokemon) => pokemon.id === id);

  const handleClick = (id, name) => (e) => {
    e.preventDefault();
    e.stopPropagation(); // experiment
    dispatch(catchPokemon({ id, name }));
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
