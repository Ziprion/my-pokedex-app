import React from 'react';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './AuthSuccess.module.scss';

const AuthSuccess = ({ handleClick }) => {
  const messageClasses = cn({
    [styles.messageLogin]: true,
    [styles.dark]: isDarkTheme(),
  });

  const successMessage = loc('loginSuccess');
  const signOutMessage = loc('signOut');

  return (
    <div className={messageClasses}>
      <span>
        {successMessage}
      </span>
      <span className={styles.username}>
        {localStorage.username}
      </span>
      <button type="button" onClick={handleClick}>{signOutMessage}</button>
    </div>
  );
};

export default AuthSuccess;
