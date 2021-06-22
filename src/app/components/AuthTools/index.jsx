import React from 'react';

import { useAuth } from '@hooks/useAuth.jsx';

import AuthSuccess from '@components/AuthSuccess';
import AuthForm from '@components/AuthForm';

const AuthTools = () => {
  const auth = useAuth();

  return (
    <>
      {auth.status ? <AuthSuccess /> : <AuthForm />}
    </>
  );
};

export default AuthTools;
