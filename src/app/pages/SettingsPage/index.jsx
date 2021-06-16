import React from 'react';
import { loc } from '@utils/languageUtils';

import LanguageSwitcher from '@containers/LanguageSwitcher';
import ThemeSwitcher from '@containers/ThemeSwitcher';

import styles from './SettingsPage.module.scss';

const SettingsPage = () => (
  <ul className={styles.settings}>
    <li>
      <span>
        {loc('lang')}
        :
      </span>
      <LanguageSwitcher />
    </li>
    <li>
      <span>
        {loc('theme')}
        :
      </span>
      <ThemeSwitcher />
    </li>
  </ul>
);

export default SettingsPage;
