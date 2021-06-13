import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from '@components/Header';
import PokemonsPage from '@pages/PokemonsPage';
import CatchedPokemonsPage from '@pages/CatchedPokemonsPage';
import NoMatchPage from '@pages/NoMatchPage';
import SettingsPage from '@pages/SettingsPage';
import PokemonPage from '@pages/PokemonCardPage';

import './App.scss';

const App = () => (
  <div className="container">
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <PokemonsPage />
        </Route>
        <Route path="/catched">
          <CatchedPokemonsPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/:id">
          <PokemonPage />
        </Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
