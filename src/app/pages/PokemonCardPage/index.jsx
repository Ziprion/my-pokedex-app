import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showPokemon } from '@store/pokemonsSlice';
import PokemonCardHOC from '@containers/PokemonCardHOC';
import { fetchPokemonById } from '@utils/fetchUtils';

const PokemonCardPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(async () => {
    const { data } = await fetchPokemonById(id);
    dispatch(showPokemon(data));
  });

  return (
    <PokemonCardHOC id={Number(id)} />
  );
};

export default PokemonCardPage;
