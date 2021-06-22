import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';

import styles from './SwipeButton.module.scss';

const SwipeButton = ({ target, id }) => {
  const isPrevious = (type) => type === 'previous';

  const swipeClasses = cn({
    [styles.swipeButton]: true,
    [styles.previous]: isPrevious(target),
    [styles.next]: !isPrevious(target),
  });

  return (
    <Link to={`/pokemons/${id}`} className={swipeClasses}><img src={`/images/icons/${target}.png`} alt={loc(`${target}`)} /></Link>
  );
};

export default SwipeButton;
