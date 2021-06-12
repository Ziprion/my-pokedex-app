import React from 'react';
import { useDispatch } from 'react-redux';
import { catchPokemon } from '@store/pokemonsSlice';

import styles from './PokemonPage.module.scss';

const PokemonPage = ({ id, name, catched }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.pokemonCard}>
      Im pokemon!
    </div>
  );
};

export default PokemonPage;
