const HttpErrors = require('http-errors');
const _ = require('lodash');
const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const { Unauthorized, Conflict } = HttpErrors;
const app = express();
const port = process.env.PORT || 5000;
const router = jsonServer.router('./server/db.json');

const users = [
  {
    id: 1, username: 'admin', password: 'admin', token: 'wedververascasa', caughtPokemons: [],
  },
  {
    id: 2, username: 'test', password: 'test', token: 'grgrecscwecregds', caughtPokemons: [],
  },
];

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.get('/api/v1/pokemons', router);

app.post('/api/v1/data', async (req, res) => {
  const token = _.get(req, 'body.token');
  const user = users.find((u) => u.token === token);

  if (!user) {
    res.send(new Conflict());
    return;
  }

  res.send({ caughtPokemons: user.caughtPokemons });
});

app.post('/api/v1/login', async (req, res) => {
  const username = _.get(req, 'body.username');
  const password = _.get(req, 'body.password');
  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    res.send(new Unauthorized());
    return;
  }

  res.send({ token: user.token, username, caughtPokemons: user.caughtPokemons });
});

app.post('/api/v1/catchPokemon', async (req, res) => {
  const id = _.get(req, 'body.id');
  const name = _.get(req, 'body.name');
  const caughtAt = _.get(req, 'body.caughtAt');
  const token = _.get(req, 'body.token');
  const user = users.find((u) => u.token === token);

  if (!user) {
    res.send(new Conflict());
    return;
  }
  const pokemon = { id, name, caughtAt };
  user.caughtPokemons.push(pokemon);

  res.send(pokemon);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port);
