import React from 'react';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { useAuth } from '@hooks/useAuth.jsx';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './AuthSuccess.module.scss';

const AuthSuccess = () => {
  const auth = useAuth();
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
        {localStorage.username}
      </span>
      <button type="button" onClick={() => auth.signout()}>{signOutMessage}</button>
    </div>
  );
};

export default AuthSuccess;
