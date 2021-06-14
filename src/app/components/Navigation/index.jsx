import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.selected}>
            {t('pokemons')}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/catched" activeClassName={styles.selected}>
            {t('catchedPokemons')}
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/settings" activeClassName={styles.selected}>
            {t('settings')}
          </NavLink>
        </li>
      </ul>
      <div className={styles.toggleMenu}>
        <div className={styles.toggleOne} />
        <div className={styles.toggleTwo} />
      </div>
    </nav>
  );
};

export default Navigation;
