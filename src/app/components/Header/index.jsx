import React from 'react';
import cn from 'classnames';

import { isDarkTheme } from '@utils/themeUtils';

import Navigation from '@components/Navigation';
import Logo from '@components/Logo';

import styles from './Header.module.scss';

const Header = () => {
  const headerClasses = cn({
    [styles.header]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <header className={headerClasses}>
      <div className={styles.menu}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
