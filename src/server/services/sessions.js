const { SessionsModel } = require('../models');

class Sessions {
  static async getById(sessionId) {
    const sessions = await SessionsModel.get();
    const session = sessions[sessionId];

    if (!session || session.expiresAt < Date.now()) return null;
    return session.value;
  }

  static async createWithUserId(userId) {
    const sessionId = await SessionsModel.create(userId, 60 * 60 * 1000);
    return sessionId;
  }

  static async deleteById(sessionId) {
    await SessionsModel.delete(sessionId);
  }
}

module.exports = Sessions;
