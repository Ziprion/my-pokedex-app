import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { toggleTheme, isDarkTheme } from '@utils/themeUtils';
import { changeTheme } from '@store/uiStateSlice';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleChangeTheme = (theme) => dispatch(changeTheme(theme));

  return (
    <div className={styles.toggleBox}>
      <span className={styles.point}>{t('themeLight')}</span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isDarkTheme()}
          onChange={() => handleChangeTheme(toggleTheme())}
        />
        <span />
      </label>
      <span className={styles.point}>{t('themeDark')}</span>
    </div>
  );
};

export default ThemeSwitcher;
