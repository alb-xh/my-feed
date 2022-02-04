const { cookies } = require('../utils');

const cookie = cookies({
  name: process.env.SESSION_COOKIE_NAME,
  secret: process.env.SESSION_COOKIE_SECRET,
});

module.exports = cookie;
