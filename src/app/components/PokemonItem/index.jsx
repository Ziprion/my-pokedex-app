import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';

import styles from './PokemonItem.module.scss';

const PokemonItem = ({
  id, name, catched, handleClick,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`/pokemons/${id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <ReactImageFallback
            src={`/images/pokemons/${id}.png`}
            fallbackImage="/images/pokemons/no-available.png"
            initialImage="/images/icons/loading.gif"
            alt={`The ${name}`}
          />
        </div>
        <span className={styles.name}>{name}</span>
        <button className={styles.button} type="button" disabled={catched} onClick={handleClick(id)}>
          {t('catch')}
        </button>
      </div>
    </Link>
  );
};

export default PokemonItem;
