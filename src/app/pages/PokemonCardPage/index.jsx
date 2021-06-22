import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchPokemonById } from '@utils/fetchUtils';
import WithLoading from '@HOCs/WithLoading';

import SwipePokemons from '@components/SwipePokemons';
import PokemonCard from '@components/PokemonCard';
import NoMatchPage from '@pages/NoMatchPage';
import NetworkErrorPage from '@pages/NetworkErrorPage';

const PokemonCardPage = ({ setLoading }) => {
  const { id: stringId } = useParams();
  const [name, setName] = useState(null);
  const [caught, setCaught] = useState(null);
  const [caughtAt, setCaughtAt] = useState(null);
  const [error, setError] = useState(null);
  const id = Number(stringId);
  const { caughtPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCaught = caughtPokemons.find((pokemon) => pokemon.id === id);

  useEffect(async () => {
    setLoading(true);
    try {
      const { data } = await fetchPokemonById(id);
      setName(data[0].name);
      setCaught(!!isCaught);
      setCaughtAt(isCaught ? isCaught.caughtAt : null);
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
      <PokemonCard id={id} name={name} caught={caught} caughtAt={caughtAt} />
    </>
  );
};

export default WithLoading(PokemonCardPage);
