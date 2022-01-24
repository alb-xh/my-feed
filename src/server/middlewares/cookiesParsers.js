const cookies = require('../cookies');

const cookiesParsers = Object.values(cookies)
  .map((cookie) => cookie.parser);

module.exports = cookiesParsers;
