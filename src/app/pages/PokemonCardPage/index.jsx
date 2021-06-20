import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchPokemonById } from '@utils/fetchUtils';

import SwipePokemons from '@components/SwipePokemons';
import PokemonCard from '@components/PokemonCard';
import NoMatchPage from '@pages/NoMatchPage';
import NetworkErrorPage from '@pages/NetworkErrorPage';
import WithLoading from '@HOCs/WithLoading';

const PokemonCardPage = ({ setLoading }) => {
  const { id: stringId } = useParams();
  const [name, setName] = useState(null);
  const [error, setError] = useState('');
  const id = Number(stringId);

  useEffect(async () => {
    setLoading(true);
    try {
      const { data } = await fetchPokemonById(id);
      setName(data[0].name);
    } catch (e) {
      const err = (e.message === 'data[0] is undefined') ? 'not found' : 'network trouble';
      setError(err);
    }
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [id]);

  const { catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatched = catchedPokemons.find((pokemon) => pokemon.id === id);
  const catched = !!isCatched;
  const catchedAt = isCatched ? isCatched.catchedAt : null;

  if (error === 'not found') {
    return (
      <NoMatchPage />
    );
  }

  if (error === 'network trouble') {
    return (
      <NetworkErrorPage />
    );
  }

  return (
    <>
      <SwipePokemons id={id} />
      <PokemonCard id={id} name={name} catched={catched} catchedAt={catchedAt} />
    </>
  );
};

export default WithLoading(PokemonCardPage);
