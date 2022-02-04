const cookieParser = require('cookie-parser');

const cookies = (args) => {
  const { name, secret } = args;

  const parser = cookieParser(secret);

  const get = (req) => {
    const { signedCookies } = req;
    return signedCookies && signedCookies[name];
  };

  const set = (res, value) => {
    res.cookie(name, value, { signed: true });
  };

  const clear = (res) => {
    res.clearCookie(name);
  };

  return {
    parser,
    get,
    set,
    clear,
  };
};

module.exports = cookies;
