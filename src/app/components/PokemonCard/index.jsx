import React from 'react';
import cn from 'classnames';
import ReactImageFallback from 'react-image-fallback';
import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({
  id, name, caught, caughtAt,
}) => {
  const statusClasses = cn({
    [styles.status]: true,
    [styles.success]: caught,
    [styles.danger]: !caught,
    [styles.dark]: isDarkTheme(),
  });

  const altText = `${name}${loc('view')}`;
  const statusText = loc('status');
  const noCaughtText = loc('noCaught');
  const caughtText = loc('caught');
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
          {caught ? <img src="/images/icons/catched.png" alt={caughtText} /> : <img src="/images/icons/no-catched.png" alt={noCaughtText} />}
          <span>{caught ? caughtText : noCaughtText}</span>
        </div>
        <span>{caught ? `${dateText}: ${caughtAt}` : null}</span>
      </div>

    </div>
  );
};

export default PokemonCard;
