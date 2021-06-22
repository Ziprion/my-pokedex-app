import React from 'react';
import { useDispatch } from 'react-redux';
import i18n from 'i18next';

import { toggleLanguage, getCurrentLanguage, loc } from '@utils/languageUtils';
import { toggleTheme, isDarkTheme } from '@utils/themeUtils';
import { changeTheme } from '@store/uiStateSlice';

import Switcher from '@components/Switcher';

import styles from './UiSettings.module.scss';

const UiSettings = () => {
  const dispatch = useDispatch();

  const languageLeftText = loc('langRus');
  const languageRightText = loc('langEng');
  const languageChecked = getCurrentLanguage() === 'en';
  const languageOnChange = () => i18n.changeLanguage(toggleLanguage());

  const themeLeftText = loc('themeLight');
  const themeRightText = loc('themeDark');
  const themeChecked = isDarkTheme();
  const themeOnChange = () => {
    const theme = toggleTheme();
    dispatch(changeTheme(theme));
  };

  return (
    <ul className={styles.settings}>
      <li>
        <span>
          {loc('lang')}
          :
        </span>
        <Switcher
          leftText={languageLeftText}
          rightText={languageRightText}
          checked={languageChecked}
          onChange={languageOnChange}
        />
      </li>
      <li>
        <span>
          {loc('theme')}
          :
        </span>
        <Switcher
          leftText={themeLeftText}
          rightText={themeRightText}
          checked={themeChecked}
          onChange={themeOnChange}
        />
      </li>
    </ul>
  );
};

export default UiSettings;
