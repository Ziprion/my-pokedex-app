import React from 'react';
import PokemonsList from '@containers/PokemonsList';

import styles from './CatchedPokemonsPage.module.scss';

const CatchedPokemonsPage = () => (
  <div className={styles.pokemonBox}>
    <PokemonsList justCatched />
  </div>
);

export default CatchedPokemonsPage;
