import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { fetchPokemonById } from '@utils/fetchUtils';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './PokemonPage.module.scss';

const PokemonPage = () => {
  const { t } = useTranslation();
  const [name, setName] = useState(null);
  const { id } = useParams();

  useEffect(async () => {
    const { data: { name: pokemonName } } = await fetchPokemonById(id);
    setName(pokemonName);
  });

  const { catchedPokemons } = useSelector(({ pokemonsState }) => pokemonsState);
  const isCatched = _.find(catchedPokemons, { id: Number(id) });
  const catched = !!isCatched;
  const catchedAt = isCatched ? isCatched.catchedAt : null;

  return (
    <div className={styles.pokemonPage}>
      <span>{name}</span>
      <img src={`/images/pokemons/${id}.png`} alt={`The ${name}`} />
      <span>
        {catchedAt ? `${t('catched')}: ${catchedAt}` : null}
      </span>
      <button type="button" disabled={catched}>
        {t('catch')}
      </button>
    </div>
  );
};

export default PokemonPage;
