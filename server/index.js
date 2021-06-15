const HttpErrors = require('http-errors');
const _ = require('lodash');

const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const { Unauthorized } = HttpErrors;
const app = express();
const port = process.env.PORT || 5000;
const router = jsonServer.router('./server/db.json');
const users = [
  { id: 1, name: 'admin', password: '123123' },
];
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/v1/pokemons', router);

// app.get('/api/v1/login', (req, res) => {
//   const username = _.get(req, 'body.username');
//   const password = _.get(req, 'body.password');
//   const user = users.find((u) => u.username === username);

//   if (!user || user.password !== password) {
//     res.send(new Unauthorized());
//     return;
//   }

//   const token = app.jwt.sign({ userId: user.id });
//   res.send({ token, username });
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port);
