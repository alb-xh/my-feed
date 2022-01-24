const crypto = require('crypto');

const generator = {
  id: (size = 20) => crypto.randomBytes(size).toString('hex'),
};

module.exports = generator;
