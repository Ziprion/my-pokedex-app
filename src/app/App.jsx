import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from '@components/Header';
import PokemonsPage from '@pages/PokemonsPage';
import PokemonPage from '@pages/PokemonPage';
import NoMatchPage from '@pages/NoMatchPage';
import SettingsPage from '@pages/SettingsPage';

import './App.scss';

const App = () => (
  <div className="container">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <PokemonsPage />
        </Route>
        <Route exact path="/catched">
          <PokemonsPage justCatched />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/:id">
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
