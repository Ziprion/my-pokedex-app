import React from 'react';
import cn from 'classnames';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({
  id, name, catched, catchedAt,
}) => {
  const statusClasses = cn({
    [styles.catched]: true,
    [styles.success]: catched,
    [styles.danger]: !catched,

  });

  return (
    <div className={styles.card}>
      <span className={styles.id}>
        #
        {id}
      </span>
      <span className={styles.name}>{name}</span>
      <img className={styles.image} src={`/images/pokemons/${id}.png`} alt={`The ${name}`} />
      <div className={statusClasses}>
        <div className={styles.status}>
          <span>Status:&nbsp;</span>
          {catched ? <img src="/images/icons/catched.png" alt="catched" /> : <img src="/images/icons/no-catched.png" alt="no catched" />}
          <span>{catched ? 'Catched!' : 'Not catched'}</span>
        </div>
        <div className={styles.date}>
          <span>{catched ? `Date: ${catchedAt}` : null}</span>
        </div>
      </div>

    </div>
  );
};

export default PokemonCard;
