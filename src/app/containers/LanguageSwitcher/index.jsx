import React from 'react';
import i18n from 'i18next';
import cn from 'classnames';
import { toggleLanguage, getCurrentLanguage, loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const switcherClasses = cn({
    [styles.switch]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <div className={styles.toggleBox}>
      <span className={styles.point}>{loc('langRus')}</span>
      <label className={switcherClasses}>
        <input
          type="checkbox"
          checked={getCurrentLanguage() === 'en'}
          onChange={() => i18n.changeLanguage(toggleLanguage())}
        />
        <span />
      </label>
      <span className={styles.point}>{loc('langEng')}</span>
    </div>
  );
};

export default LanguageSwitcher;
