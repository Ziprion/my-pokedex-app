import React from 'react';

import Navigation from '@components/Navigation';
import Logo from '@components/Logo';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.menu}>
      <Logo />
      <Navigation />
    </div>
  </header>
);

export default Header;
