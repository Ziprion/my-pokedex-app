import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './PokemonItem.module.scss';

const PokemonItem = ({
  id, name, catched, handleClick,
}) => {
  const { t } = useTranslation();

  return (
    <Link exact to={`/${id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={`/images/pokemons/${id}.png`} onError={(e) => { e.target.src = '/images/pokemons/no-available.png'; }} alt={`The ${name}`} />
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
