import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import cn from 'classnames';
import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './PokemonItem.module.scss';

const PokemonItem = ({
  id, name, catched, handleClick,
}) => {
  const itemClasses = cn({
    [styles.item]: true,
    [styles.dark]: isDarkTheme(),
  });

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
        <button className={styles.button} type="button" disabled={catched} onClick={handleClick(id)}>
          {loc('catch')}
        </button>
      </div>
    </Link>
  );
};

export default PokemonItem;
