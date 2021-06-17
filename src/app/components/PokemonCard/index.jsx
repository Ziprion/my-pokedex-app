import React from 'react';
import cn from 'classnames';
import ReactImageFallback from 'react-image-fallback';
import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({
  id, name, catched, catchedAt,
}) => {
  const statusClasses = cn({
    [styles.status]: true,
    [styles.success]: catched,
    [styles.danger]: !catched,
    [styles.dark]: isDarkTheme(),
  });

  const altText = `${name}${loc('view')}`;
  const statusText = loc('status');
  const noCatchedText = loc('noCatched');
  const catchedText = loc('catched');
  const dateText = loc('date');

  return (
    <div className={styles.card}>
      <span className={styles.id}>
        #
        {id}
      </span>
      <span className={styles.name}>{name}</span>
      <div className={styles.image}>
        <ReactImageFallback
          src={`/images/pokemons/${id}.png`}
          fallbackImage="/images/pokemons/no-available.png"
          initialImage="/images/icons/loading.gif"
          alt={altText}
        />
      </div>
      <div className={statusClasses}>
        <div className={styles.catch}>
          <span>
            {statusText}
            :&nbsp;
          </span>
          {catched ? <img src="/images/icons/catched.png" alt={catchedText} /> : <img src="/images/icons/no-catched.png" alt={noCatchedText} />}
          <span>{catched ? catchedText : noCatchedText}</span>
        </div>
        <span>{catched ? `${dateText}: ${catchedAt}` : null}</span>
      </div>

    </div>
  );
};

export default PokemonCard;
