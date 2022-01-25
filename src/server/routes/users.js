const express = require('express');

const { UsersService, SessionsService } = require('../services');
const { SessionCookie } = require('../cookies');
const { respond } = require('../utils');

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    respond(res).badRequest();
    return;
  }

  const user = await UsersService.getByUserName(username);
  if (user) {
    respond(res).conflict();
    return;
  }

  const userId = await UsersService.create({ username, password });
  const sessionId = await SessionsService.createWithUserId(userId);

  SessionCookie.set(res, sessionId);

  respond(res).created();
});

router.get('/me', async (req, res) => {
  const { user } = req;

  if (!user) {
    respond(res).notFound();
    return;
  }

  const { username } = user;
  respond(res).json({ username });
});

router.post('/sign-in', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    respond(res).badRequest();
    return;
  }

  const user = await UsersService.getByUserName(username);
  if (!user || user.password !== password) {
    respond(res).unauthenticated();
    return;
  }

  const sessionId = await SessionsService.createWithUserId(user.id);
  SessionCookie.set(res, sessionId);

  respond(res).ok();
});

router.post('/sign-out', async (req, res) => {
  const { sessionId } = req;

  await SessionsService.deleteById(sessionId);

  SessionCookie.clear(res);
});

module.exports = router;
