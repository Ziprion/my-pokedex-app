import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { toggleLanguage, getCurrentLanguage } from '@utils/languageUtils';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.toggleBox}>
      <span className={styles.point}>{t('langRus')}</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={getCurrentLanguage() === 'en'}
          onChange={() => i18n.changeLanguage(toggleLanguage())}
        />
        <span />
      </label>
      <span className={styles.point}>{t('langEng')}</span>
    </div>
  );
};

export default LanguageSwitcher;
