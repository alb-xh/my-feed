const { UsersModel } = require('../models');

class Users {
  static async getByUserName(username) {
    const users = await UsersModel.get();
    return users.find((user) => user.username === username);
  }

  static async getById(userId) {
    const users = await UsersModel.get();
    return users.find(({ id }) => id === userId);
  }

  static async create(user) {
    const userId = await UsersModel.create(user);
    return userId;
  }
}

module.exports = Users;
