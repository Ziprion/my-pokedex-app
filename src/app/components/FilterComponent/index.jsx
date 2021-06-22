import React from 'react';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './FilterComponent.module.scss';

const FilterComponent = ({ sortedBy, handleChange }) => {
  const inputClasses = cn({
    [styles.select]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <select
      className={inputClasses}
      onChange={handleChange}
      defaultValue={sortedBy}
    >
      <option value="idAsc">{loc('sortIdAsc')}</option>
      <option value="idDesc">{loc('sortIdDesc')}</option>
      <option value="nameAsc">{loc('sortNameAsc')}</option>
      <option value="nameDesc">{loc('sortNameDesc')}</option>
    </select>
  );
};

export default FilterComponent;
