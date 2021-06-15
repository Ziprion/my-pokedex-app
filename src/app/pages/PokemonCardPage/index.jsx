import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchPokemonById } from '@utils/fetchUtils';
import _ from 'lodash';
import PokemonCard from '@components/PokemonCard';
import NoMatchPage from '@pages/NoMatchPage';
import WithLoading from '@HOCs/WithLoading';

const PokemonCardPage = ({ setLoading }) => {
  const { id: stringId } = useParams();
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);
  const id = Number(stringId);

  useEffect(async () => {
    try {
      const { data: { 0: { name: pokemonName } } } = await fetchPokemonById(id);
      setName(pokemonName);
    } catch (e) {
      setError('Not found');
    }
    setLoading(false);
  });

  const { catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatched = _.find(catchedPokemons, { id });
  const catched = !!isCatched;
  const catchedAt = isCatched ? isCatched.catchedAt : null;

  if (error) {
    return (
      <NoMatchPage />
    );
  }

  return (
    <PokemonCard id={id} name={name} catched={catched} catchedAt={catchedAt} />
  );
};

export default WithLoading(PokemonCardPage);
