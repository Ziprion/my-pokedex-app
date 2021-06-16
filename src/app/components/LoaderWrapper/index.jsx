import React from 'react';
import cn from 'classnames';
import { isDarkTheme } from '@utils/themeUtils';

import AnimationLoader from '@components/AnimationLoader';

import styles from './LoaderWrapper.module.scss';

const LoaderWrapper = () => {
  const wrapperClasses = cn({
    [styles.wrapper]: true,
    [styles.dark]: isDarkTheme(),
  });

  return (<div className={wrapperClasses}><AnimationLoader /></div>);
};

export default LoaderWrapper;
