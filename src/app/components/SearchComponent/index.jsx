import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { setSearchingText, stopTyping } from '@store/pokemonsStateSlice';
import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './SearchComponent.module.scss';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const { searchText } = useSelector(({ pokemonsState }) => pokemonsState);

  const handleChange = ({ target }) => {
    dispatch(setSearchingText(target.value.trim()));
    clearTimeout(timer);
    setTimer(setTimeout(async () => {
      dispatch(stopTyping());
    },
    500));
  };

  const handleClick = () => {
    dispatch(setSearchingText(''));
    dispatch(stopTyping());
  };

  const inputClasses = cn({
    [styles.search]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <div className={styles.searchBox}>

      <input
        className={inputClasses}
        type="text"
        value={searchText}
        onChange={(e) => handleChange(e)}
        placeholder={loc('searchPlaceholder')}
      />
      <button type="button" className={styles.reset} onClick={handleClick}>x</button>
    </div>
  );
};

export default SearchComponent;
