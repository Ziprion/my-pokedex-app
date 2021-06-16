import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon } from '@store/pokemonsSlice';

import PokemonItem from '@components/PokemonItem';

const PokemonsList = ({ justCatched }) => {
  const dispatch = useDispatch();
  const { pokemons, catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatchedById = (id) => _.find(catchedPokemons, { id });
  const currentPokemons = justCatched ? pokemons.filter(({ id }) => isCatchedById(id)) : pokemons;

  const handleClick = (pokemonId) => (e) => {
    e.preventDefault();
    dispatch(catchPokemon(pokemonId));
  };

  return (
    <>
      {currentPokemons.map(({ id, name }) => {
        const catched = isCatchedById(id);
        const catchedAt = catched ? catched.catchedAt : null;
        return (
          <PokemonItem
            key={id}
            id={id}
            name={name}
            catched={catched}
            catchedAt={catchedAt}
            handleClick={handleClick}
          />
        );
      })}
    </>

  );
};

export default PokemonsList;
