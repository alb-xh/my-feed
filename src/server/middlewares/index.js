const jsonMiddleware = require('./json');
const cookiesParsersMiddlewares = require('./cookiesParsers');
const authMiddleware = require('./auth');

module.exports = [
  jsonMiddleware,
  ...cookiesParsersMiddlewares,
  authMiddleware,
];
