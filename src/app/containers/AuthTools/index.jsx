import React, { useState } from 'react';
import { cleanCaughtPokemons, syncCaughtPokemons } from '@store/pokemonsStateSlice';
import { useAuth } from '@hooks/useAuth.jsx';
import { fetchLogin } from '@utils/fetchUtils';

import { useDispatch } from 'react-redux';

import AuthSuccess from '@components/AuthSuccess';
import AuthForm from '@components/AuthForm';

const AuthTools = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const [error, setError] = useState(null);

  const handleClick = () => {
    dispatch(cleanCaughtPokemons());
    auth.signout();
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    setError(null);
    const data = { username: values.username.toLowerCase(), password: values.password };
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
  };

  return (
    <>
      {auth.status ? <AuthSuccess handleClick={handleClick} />
        : <AuthForm handleSubmit={handleSubmit} error={error} />}
    </>
  );
};

export default AuthTools;
