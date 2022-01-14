const fs = require('fs/promises');
const path = require('path');

const { generateId } = require('./helpers');

const FILE = path.join(__dirname, 'users.json');

class Users {
  static async get() {
    const users = JSON.parse(await fs.readFile(FILE, 'utf-8'));
    return users;
  }

  static async getByUserName(username) {
    const users = await Users.get();
    return users.find((user) => user.username === username);
  }

  static async getById(userId) {
    const users = await Users.get();
    return users.find(({ id }) => id === userId);
  }

  static async create(user) {
    const id = generateId();
    const newUser = { ...user, id };

    const users = await Users.get();
    const allUsers = [...users, newUser];

    await fs.writeFile(FILE, JSON.stringify(allUsers));

    return id;
  }
}

module.exports = Users;
