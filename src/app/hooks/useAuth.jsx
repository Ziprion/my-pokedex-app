import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

const useProvideAuth = () => {
  const initAuth = !!localStorage.token;
  const [status, changeStatus] = useState(initAuth);

  const signin = () => {
    changeStatus(true);
  };

  const signout = () => {
    delete localStorage.token;
    delete localStorage.username;
    changeStatus(false);
  };

  return {
    status,
    signin,
    signout,
  };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
