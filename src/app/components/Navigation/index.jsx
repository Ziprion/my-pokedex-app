import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { isDarkTheme } from '@utils/themeUtils';
import { loc } from '@utils/languageUtils';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const сlasses = cn({
    [styles.navigation]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <nav>
      <ul className={сlasses}>
        <li>
          <NavLink exact to="/" activeClassName={styles.selected}>
            <div className={styles.navItem}>
              <div className={styles.image}>
                <img src="/images/icons/pokedex.png" alt={loc('pokemons')} />
              </div>
              <span>{loc('pokemons')}</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/pokebag" activeClassName={styles.selected}>
            <div className={styles.navItem}>
              <div className={styles.image}>
                <img src="/images/icons/pokebag.png" alt={loc('pokebag')} />
              </div>
              <span>{loc('pokebag')}</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/settings" activeClassName={styles.selected}>
            <div className={styles.navItem}>
              <div className={styles.image}>
                <img src="/images/icons/settings.png" alt={loc('settings')} />
              </div>
              <span>{loc('settings')}</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
