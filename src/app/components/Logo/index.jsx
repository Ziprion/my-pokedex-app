import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Logo.module.scss';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src="/images/icons/logo.svg" alt={t('altLogo')} />
        <span>Pokédex</span>
      </div>
    </Link>

  );
};

export default Logo;
