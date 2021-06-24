import 'regenerator-runtime/runtime'; /* eslint react/jsx-filename-extension: 0 */
import '@testing-library/jest-dom';
import '../src/i18nInit.js';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from '@store';

import PokemonCard from '@components/PokemonCard/index.jsx';

describe('PokemonCard tests', () => {
  const store = configureStore({ reducer });

  test('render not caught pokemons', async () => {
    const pokemon = { id: 1, name: 'Max' };
    const vdom = (
      <Provider store={store}>
        <PokemonCard pokemon={pokemon} />
      </Provider>
    );
    render(vdom);

    expect(screen.getByText('Не пойман')).toBeInTheDocument();
    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.queryByTestId(/Дата/i)).toBeNull();
  });

  test('render caught pokemons', async () => {
    const pokemon = {
      id: 1, name: 'Max', caught: true, caughtAt: '22.11.2222',
    };
    const vdom = (
      <Provider store={store}>
        <PokemonCard pokemon={pokemon} />
      </Provider>
    );
    render(vdom);

    expect(screen.getByText('Пойман')).toBeInTheDocument();
    expect(screen.getByText('Дата: 22.11.2222')).toBeInTheDocument();
  });
});
