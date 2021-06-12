import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import reducer from '@store';
import { initialPokemons } from '@store/pokemonsSlice';
import resources from '@locales';
import { setDefaultLanguage, getCurrentLanguage } from '@utils/languageUtils';
import { getPokemonsByPage } from '@utils/fetchUtils';

import App from './app/App';

export default async () => {
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

  const initStore = await getPokemonsByPage(1);
  store.dispatch(initialPokemons(initStore.data));

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
