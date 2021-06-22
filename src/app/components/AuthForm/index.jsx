import React from 'react';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';

import { loc } from '@utils/languageUtils';
import { isDarkTheme } from '@utils/themeUtils';

import styles from './AuthForm.module.scss';

const AuthForm = ({ handleSubmit, error }) => {
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
        onSubmit={handleSubmit}
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
