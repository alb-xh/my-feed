const fs = require('fs/promises');
const path = require('path');

const { generator } = require('../utils');

const FILE = path.join(__dirname, '..', 'data', 'sessions.json');

class Sessions {
  static async get() {
    const sessions = JSON.parse(await fs.readFile(FILE, 'utf-8'));
    return sessions;
  }

  static async create(value, ttl) {
    const sessions = await Sessions.get();

    const sessionId = generator.id();
    sessions[sessionId] = {
      expiresAt: Date.now() + ttl,
      value,
    };

    await fs.writeFile(FILE, JSON.stringify(sessions));

    return sessionId;
  }

  static async delete(sessionId) {
    const sessions = await Sessions.get();

    delete sessions[sessionId];

    await fs.writeFile(FILE, JSON.stringify(sessions));
  }
}

module.exports = Sessions;
