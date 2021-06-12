import React from 'react';
import _ from 'lodash';
import PokemonCard from '@components/PokemonCard';
import { useSelector, useDispatch } from 'react-redux';
import { catchPokemon } from '@store/pokemonsSlice';

const PokemonsList = ({ pokemons }) => {
  const catchedPokemons = useSelector((state) => state.pokemonsState.catchedPokemons);
  const dispatch = useDispatch();

  const handleClick = (pokemonId) => (e) => {
    e.preventDefault();
    dispatch(catchPokemon(pokemonId));
  };

  return (
    <>
      {pokemons.map(({ id, name }) => {
        const catched = _.find(catchedPokemons, { id });
        const catchedAt = catched ? catched.catchedAt : null;
        return (
          <PokemonCard
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
