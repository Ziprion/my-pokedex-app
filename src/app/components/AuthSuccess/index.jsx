import React from 'react';
import cn from 'classnames';

import { cleanCaughtPokemons } from '@store/pokemonsStateSlice';
import { loc } from '@utils/languageUtils';
import { useAuth } from '@hooks/useAuth.jsx';
import { isDarkTheme } from '@utils/themeUtils';

import { useDispatch } from 'react-redux';
import styles from './AuthSuccess.module.scss';

const AuthSuccess = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cleanCaughtPokemons());
    auth.signout();
  };

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
