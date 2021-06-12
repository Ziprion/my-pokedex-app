import React from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '@components/LanguageSwitcher';
import ThemeSwitcher from '@components/ThemeSwitcher';

import styles from './SettingsPage.module.scss';

const SettingsPage = () => {
  useTranslation();

  return (
    <main className={styles.settings}>
      <ul>
        <li>
          <span>Language:</span>
          <LanguageSwitcher />
        </li>
        <li>
          <span>Theme:</span>
          <ThemeSwitcher />
        </li>
      </ul>
    </main>
  );
};

export default SettingsPage;
