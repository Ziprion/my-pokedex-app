import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({
  id, name, catched, catchedAt, handleClick,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={`/${id}`}>
      <div className={styles.pokemonCard}>
        <img src={`/images/pokemons/${id}.png`} alt={`The ${name}`} />
        <span>{name}</span>
        <span className={styles.pokemonCatchedDate}>
          {catchedAt ? `${t('catched')}: ${catchedAt}` : null}
        </span>
        <button type="button" disabled={catched} onClick={handleClick(id)}>
          {t('catch')}
        </button>
      </div>
    </Link>
  );
};

export default PokemonCard;
