const path = require('path');
const express = require('express');

const respond = require('./respond');
const cookies = require('./cookies');

const { Users, Sessions } = require('./data');

const app = express();

app.use(express.json());

const BUILD_FOLDER_PATH = path.join(__dirname, '..', 'client', 'build');
const BUILD_HTML_FILE = path.join(BUILD_FOLDER_PATH, 'index.html');

app.use(express.static(BUILD_FOLDER_PATH));

const cookie = cookies({
  name: process.env.SESSION_COOKIE_NAME,
  secret: process.env.SESSION_COOKIE_SECRET,
});

app.use(cookie.parser);

app.use(async (req, res, next) => {
  const sessionId = cookie.get(req);
  if (sessionId) {
    const userId = await Sessions.getById(sessionId);
    const user = await Users.getById(userId);

    req.sessionId = sessionId;
    req.user = user;
  }

  next();
});

app.get('/user', async (req, res) => {
  const { user } = req;

  if (!user) {
    respond(res).notFound();
    return;
  }

  const { username } = user;
  respond(res).json({ username });
});

app.post('/user', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    respond(res).badRequest();
    return;
  }

  const user = await Users.getByUserName(username);
  if (user) {
    respond(res).conflict();
    return;
  }

  const userId = await Users.create({ username, password });

  const sessionId = await Sessions.create(userId);
  cookie.set(res, sessionId);

  respond(res).created();
});

app.post('sign_in', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    respond(res).badRequest();
    return;
  }

  const user = await Users.getByUserName(username);
  if (!user) {
    respond(res).unauthenticated();
    return;
  }

  const sessionId = await Sessions.create(user.id);
  cookie.set(res, sessionId);

  respond(res).ok();
});

app.post('sign_out', async (req, res) => {
  const { sessionId } = req;

  await Sessions.delete(sessionId);

  cookie.clear(res);
});

app.get('*', (req, res) => {
  respond(res).file(BUILD_HTML_FILE);
});

module.exports = app;
