const path = require('path');
const express = require('express')
const app = express()

app.use(express.static('src/client/build'));

module.exports = app;
