import React from 'react';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './SearchComponent.module.scss';

const SearchComponent = ({ searchText, handleChange, handleClick }) => {
  const inputClasses = cn({
    [styles.search]: true,
    [styles.dark]: isDarkTheme(),
  });

  const resetClasses = cn({
    [styles.reset]: true,
    [styles.darkReset]: isDarkTheme(),
  });

  return (
    <div className={styles.searchBox}>

      <input
        className={inputClasses}
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder={loc('searchPlaceholder')}
      />
      <button type="button" className={resetClasses} onClick={handleClick}>&nbsp;</button>
    </div>
  );
};

export default SearchComponent;
