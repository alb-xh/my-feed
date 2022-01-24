const fs = require('fs/promises');
const path = require('path');

const { generator } = require('../utils');

const FILE = path.join(__dirname, '..', 'data', 'users.json');

class Users {
  static async get() {
    const users = JSON.parse(await fs.readFile(FILE, 'utf-8'));
    return users;
  }

  static async create(user) {
    const id = generator.id();
    const newUser = { ...user, id };

    const users = await Users.get();
    const allUsers = [...users, newUser];

    await fs.writeFile(FILE, JSON.stringify(allUsers));

    return id;
  }
}

module.exports = Users;
