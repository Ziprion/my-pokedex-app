import React from 'react';
import cn from 'classnames';
import styles from './AnimationLoader.module.scss';

const classes = cn({
  [styles.pokeball]: true,
  [styles.flip]: true,
});

const AnimationLoader = () => (<div className={classes} />);

export default AnimationLoader;
