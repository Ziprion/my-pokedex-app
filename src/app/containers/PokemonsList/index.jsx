import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon } from '@store/pokemonsStateSlice';

import PokemonItem from '@components/PokemonItem';

const PokemonsList = ({ pokemons }) => {
  const dispatch = useDispatch();
  const { catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatchedById = (id) => catchedPokemons.find((pokemon) => pokemon.id === id);

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
          catched={isCatchedById(id)}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default PokemonsList;
