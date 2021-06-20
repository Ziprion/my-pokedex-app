import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '@components/Header';
import PokemonsPage from '@pages/PokemonsPage';
import PokeBagPage from '@pages/PokeBagPage';
import NoMatchPage from '@pages/NoMatchPage';
import SettingsPage from '@pages/SettingsPage';
import PokemonCardPage from '@pages/PokemonCardPage';

import './App.scss';

const App = () => {
  const theme = useSelector((state) => state.uiState.theme);

  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <PokemonsPage />
          </Route>
          <Route exact path="/pokebag">
            <PokeBagPage />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/pokemons/:id">
            <PokemonCardPage />
          </Route>
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
