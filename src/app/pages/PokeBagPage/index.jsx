import React from 'react';

import PokemonsList from '@containers/PokemonsList';

import styles from './PokeBagPage.module.scss';

const PokeBagPage = () => (
  <div className={styles.pokemonBox}>
    <PokemonsList justCatched />
  </div>
);

export default PokeBagPage;
