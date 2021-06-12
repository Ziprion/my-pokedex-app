import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({ id, name, catchedAt }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.pokemonPage}>
      <span>{id}</span>
      <span>{name}</span>
      <img src={`/images/pokemons/${id}.png`} alt={`The ${name}`} />
      <span>
        {catchedAt ? `${t('catched')}: ${catchedAt}` : null}
      </span>
    </div>
  );
};

export default PokemonCard;
