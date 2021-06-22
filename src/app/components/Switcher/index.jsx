import React from 'react';
import cn from 'classnames';

import { isDarkTheme } from '@utils/themeUtils';

import styles from './Switcher.module.scss';

const Switcher = ({
  leftText, rightText, checked, onChange,
}) => {
  const switcherClasses = cn({
    [styles.switch]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (
    <div className={styles.toggleBox}>
      <span className={styles.point}>{leftText}</span>
      <label className={switcherClasses}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span />
      </label>
      <span className={styles.point}>{rightText}</span>
    </div>
  );
};

export default Switcher;
