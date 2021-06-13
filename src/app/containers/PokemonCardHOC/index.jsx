import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import PokemonCard from '@components/PokemonCard';

const PokemonCardHOC = ({ id }) => {
  const { name } = useSelector(({ pokemonsState: { currentPokemon } }) => currentPokemon);
  const { catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatched = _.find(catchedPokemons, { id });
  const catched = !!isCatched;
  const catchedAt = isCatched ? isCatched.catchedAt : null;

  return (
    <PokemonCard id={id} name={name} catched={catched} catchedAt={catchedAt} />
  );
};

export default PokemonCardHOC;
