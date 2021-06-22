import React from 'react';
import { Link } from 'react-router-dom';

import { loc } from '@utils/languageUtils';

import styles from './SwipeButton.module.scss';

const SwipeButton = ({ target, id }) => (
  <Link to={`/pokemons/${id}`} className={styles.swipeButton}><img src={`/images/icons/${target}.png`} alt={loc(`${target}`)} /></Link>
);

export default SwipeButton;
