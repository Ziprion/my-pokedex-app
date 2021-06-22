import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';
import { useAuth } from '@hooks/useAuth.jsx';
import { fetchLogin } from '@utils/fetchUtils';
import { syncCaughtPokemons } from '@store/pokemonsStateSlice';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const [error, setError] = useState(null);

  const formClasses = cn({
    [styles.form]: true,
    [styles.dark]: isDarkTheme(),
  });

  const usernameMessage = loc('username');
  const passwordMessage = loc('password');
  const errorMessage = loc('loginError');
  const networkMessage = loc('networkError');

  return (
    <div className={formClasses}>
      <span>{loc('saveMessage')}</span>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          setError(null);
          const data = values;
          try {
            const response = await fetchLogin(data);

            if (response.data.message === 'Unauthorized') {
              setError('Unauthorized');
              return;
            }

            localStorage.username = response.data.username;
            localStorage.token = response.data.token;
            const { caughtPokemons } = response.data;
            dispatch(syncCaughtPokemons(caughtPokemons));
            auth.signin();
          } catch (e) {
            setError(e.message);
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="username"
              placeholder={usernameMessage}
              className={error ? styles.warning : null}
              readOnly={isSubmitting}
              required
            />
            <Field
              type="password"
              name="password"
              placeholder={passwordMessage}
              className={error ? styles.warning : null}
              readOnly={isSubmitting}
              required
            />
            <div className={styles.feedback}>
              {error === 'Unauthorized'
                ? errorMessage
                : null}
              {error && error !== 'Unauthorized' ? networkMessage
                : null}
            </div>
            <button type="submit" disabled={isSubmitting}>
              {loc('signIn')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
