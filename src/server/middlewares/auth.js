const { SessionCookie } = require('../cookies');
const { SessionsService, UsersService } = require('../services');

const auth = async (req, res, next) => {
  const sessionId = SessionCookie.get(req);

  if (sessionId) {
    const userId = await SessionsService.getById(sessionId);
    const user = await UsersService.getById(userId);

    req.sessionId = sessionId;
    req.user = user;
  }

  next();
};

module.exports = auth;
