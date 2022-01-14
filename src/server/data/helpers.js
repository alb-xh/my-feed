const crypto = require('crypto');

const generateId = (size = 20) => crypto.randomBytes(size).toString('hex');

module.exports = {
  generateId,
};
