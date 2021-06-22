import React from 'react';

import { getNextId, getPreviousId } from '@utils/pokemonUtils';

import SwipeButton from '@components/SwipeButton';

import styles from './SwipePokemons.module.scss';

const SwipePokemons = ({ id }) => (
  <div className={styles.swipeBox}>
    <SwipeButton id={getPreviousId(id)} target="previous" />
    <SwipeButton id={getNextId(id)} target="next" />
  </div>
);

export default SwipePokemons;
