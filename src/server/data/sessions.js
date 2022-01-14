const fs = require('fs/promises');
const path = require('path');

const { generateId } = require('./helpers');

const FILE = path.join(__dirname, 'sessions.json');

class Sessions {
  static async get() {
    const sessions = JSON.parse(await fs.readFile(FILE, 'utf-8'));
    return sessions;
  }

  static async getById(sessionId) {
    const sessions = await Sessions.get();
    const session = sessions[sessionId];

    if (!session || session.expiresAt < Date.now()) return null;
    return session.value;
  }

  static async create(value, ttl = 60 * 60 * 1000) {
    const sessions = await Sessions.get();

    const sessionId = generateId();
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
