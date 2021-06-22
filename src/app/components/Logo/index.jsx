import React from 'react';
import { Link } from 'react-router-dom';

import { loc } from '@utils/languageUtils';

import styles from './Logo.module.scss';

const Logo = () => (
  <Link to="/">
    <div className={styles.logo}>
      <img src="/images/icons/logo.png" alt={loc('altLogo')} />
    </div>
  </Link>

);

export default Logo;
