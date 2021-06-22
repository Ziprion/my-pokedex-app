import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import reducer from '@store';
import { syncCaughtPokemons } from '@store/pokemonsStateSlice';
import { setDefaultLanguage, getCurrentLanguage } from '@utils/languageUtils';
import { fetchData } from '@utils/fetchUtils';
import resources from '@locales';
import { ProvideAuth, useAuth } from '@hooks/useAuth.jsx';

import App from './app/App';

const Init = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  if (auth.status) {
    fetchData()
      .catch(() => {
        auth.signout();
      })
      .then(({ data: { caughtPokemons } }) => {
        dispatch(syncCaughtPokemons(caughtPokemons));
      });
  }

  return <App />;
};

export default () => {
  setDefaultLanguage();

  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: getCurrentLanguage(),
      fallbackLng: false,
    });

  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

  render(
    <ProvideAuth>
      <Provider store={store}>
        <Init />
      </Provider>
    </ProvideAuth>,
    document.getElementById('root'),
  );
};
