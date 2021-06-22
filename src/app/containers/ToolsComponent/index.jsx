import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSortedBy, setSearchingText, stopTyping } from '@store/pokemonsStateSlice';

import SearchComponent from '@components/SearchComponent';
import FilterComponent from '@components/FilterComponent';

import styles from './ToolsComponent.module.scss';

const ToolsComponent = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const { searchText, sortedBy } = useSelector(({ pokemonsState }) => pokemonsState);

  const handleChangeText = ({ target }) => {
    dispatch(setSearchingText(target.value.trim()));
    clearTimeout(timer);
    setTimer(setTimeout(async () => {
      dispatch(stopTyping());
    },
    500));
  };

  const handleReset = () => {
    dispatch(setSearchingText(''));
    dispatch(stopTyping());
  };

  const handleChangeSort = ({ target }) => {
    const selectedOption = target.selectedOptions[0].value;
    dispatch(changeSortedBy(selectedOption));
  };

  return (
    <form className={styles.toolsBox} onSubmit={(e) => e.preventDefault()}>
      <SearchComponent
        searchText={searchText}
        handleChange={handleChangeText}
        handleClick={handleReset}
      />
      <FilterComponent sortedBy={sortedBy} handleChange={handleChangeSort} />
    </form>
  );
};

export default ToolsComponent;
