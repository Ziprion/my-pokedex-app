import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { toggleTheme, isDarkTheme } from '@utils/themeUtils';
import { changeTheme } from '@store/uiStateSlice';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const handleChangeTheme = (theme) => dispatch(changeTheme(theme));

  const switcherClasses = cn({
    [styles.switch]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <div className={styles.toggleBox}>
      <span className={styles.point}>{loc('themeLight')}</span>
      <label className={switcherClasses}>
        <input
          type="checkbox"
          checked={isDarkTheme()}
          onChange={() => handleChangeTheme(toggleTheme())}
        />
        <span />
      </label>
      <span className={styles.point}>{loc('themeDark')}</span>
    </div>
  );
};

export default ThemeSwitcher;
