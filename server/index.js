const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '..', 'dist')));
const router = jsonServer.router('./server/db.json');

app.get('/pokemons', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port);
