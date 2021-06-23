import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchPokemonById } from '@utils/fetchUtils';
import WithLoading from '@HOCs/WithLoading';

import SwipePokemons from '@containers/SwipePokemons';
import PokemonCard from '@components/PokemonCard';
import NoMatchPage from '@pages/NoMatchPage';
import NetworkErrorPage from '@pages/NetworkErrorPage';

const PokemonCardPage = ({ setLoading }) => {
  const { id: stringId } = useParams();
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState(null);
  const id = Number(stringId);
  const { caughtPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCaught = caughtPokemons.find((p) => p.id === id);

  useEffect(async () => {
    setLoading(true);
    try {
      const { data } = await fetchPokemonById(id);
      setPokemon({
        id,
        name: data[0].name,
        caught: !!isCaught,
        caughtAt: isCaught ? isCaught.caughtAt : null,
      });
    } catch (e) {
      const err = (e.message === 'data[0] is undefined' || e.message === 'r[0] is undefined') ? 'not found' : 'network trouble';
      setError(err);
    }
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [id]);

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
      <PokemonCard pokemon={pokemon} />
    </>
  );
};

export default WithLoading(PokemonCardPage);
