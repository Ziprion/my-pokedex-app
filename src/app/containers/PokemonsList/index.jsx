import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon } from '@store/pokemonsStateSlice';

import PokemonItem from '@components/PokemonItem';

const PokemonsList = ({ pokemons }) => {
  const dispatch = useDispatch();
  const { catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatchedById = (id) => _.find(catchedPokemons, { id });

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
