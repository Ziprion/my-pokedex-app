import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { changeSortedBy } from '@store/pokemonsStateSlice';
import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './FilterComponent.module.scss';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const { sortedBy, isFetching } = useSelector(({ pokemonsState }) => pokemonsState);

  const handleChange = ({ target }) => {
    const selectedOption = target.selectedOptions[0].value;
    dispatch(changeSortedBy(selectedOption));
  };

  const inputClasses = cn({
    [styles.select]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <select
      className={inputClasses}
      onChange={handleChange}
      defaultValue={sortedBy}
      disabled={isFetching}
    >
      <option value="idAsc">{loc('sortIdAsc')}</option>
      <option value="idDesc">{loc('sortIdDesc')}</option>
      <option value="nameAsc">{loc('sortNameAsc')}</option>
      <option value="nameDesc">{loc('sortNameDesc')}</option>
    </select>
  );
};

export default FilterComponent;
