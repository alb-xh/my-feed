const path = require('path');
const express = require('express')
const app = express()

const BUILD_FOLDER_PATH = path.join(__dirname, '..', 'client', 'build');
const BUILD_HTML_FILE = path.join(BUILD_FOLDER_PATH, 'index.html');

app.use(express.static(BUILD_FOLDER_PATH));

app.get([
  '/',
  '/login',
  '/users',
  '/signup',
  '/feed',
], (req, res) => {
  res.sendFile(BUILD_HTML_FILE);
});

app.get('/user', (req, res) => {
  res
    .status(404)
    .send('Not found!');
});

app.get('*', (req, res) => {
  res
    .status(404)
    .send('NOT FOUND');
});

module.exports = app;
