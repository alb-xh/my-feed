const express = require('express');

const respond = require('./utils/respond');
const middlewares = require('./middlewares');
const router = require('./router');

const app = express();

app.use(middlewares);
app.use('/api', router);
app.get('*', (req, res) => {
  respond(res).notFound();
});

module.exports = app;
