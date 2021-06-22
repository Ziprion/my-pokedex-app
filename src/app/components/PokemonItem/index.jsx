import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import { useSelector } from 'react-redux';
import styles from './PokemonItem.module.scss';

const PokemonItem = ({
  id, name, caught, caughtAt, handleClick,
}) => {
  const { isFetching } = useSelector(({ pokemonsState }) => pokemonsState);
  const { pathname } = useLocation();
  console.log(pathname);

  const itemClasses = cn({
    [styles.item]: true,
    [styles.dark]: isDarkTheme(),
  });

  const buttonText = loc('catch');
  const statusText = loc('caughtAt');

  return (
    <Link to={`/pokemons/${id}`}>
      <div className={itemClasses}>
        <div className={styles.image}>
          <ReactImageFallback
            src={`/images/pokemons/${id}.png`}
            fallbackImage="/images/pokemons/no-available.png"
            initialImage="/images/icons/loading.gif"
            alt={`${name}${loc('view')}`}
          />
        </div>
        <span className={styles.name}>{name}</span>
        {caught && pathname === '/pokebag' ? (
          <>
            <p>{statusText}</p>
            <p>{caughtAt}</p>
          </>
        ) : (
          <button className={styles.button} type="button" disabled={caught || isFetching} onClick={handleClick(id, name)}>
            {buttonText}
          </button>
        ) }
      </div>
    </Link>
  );
};

export default PokemonItem;
