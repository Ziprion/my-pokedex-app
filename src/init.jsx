import React from 'react'; /* eslint no-unused-vars: 0 */
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import reducer from '@store';
import { syncCaughtPokemons } from '@store/pokemonsStateSlice';
import { fetchData } from '@utils/fetchUtils';
import { ProvideAuth, useAuth } from '@hooks/useAuth.jsx';
import i18n from './i18nInit';

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
