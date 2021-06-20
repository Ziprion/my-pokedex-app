import React from 'react';

import SearchComponent from '@components/SearchComponent';
import FilterComponent from '@components/FilterComponent';

import styles from './ToolsComponent.module.scss';

const ToolsComponent = () => (
  <form className={styles.toolsBox} onSubmit={(e) => e.preventDefault()}>
    <SearchComponent />
    <FilterComponent />
  </form>
);

export default ToolsComponent;
