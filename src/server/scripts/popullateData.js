const path = require('path');
const fs = require('fs/promises');

const DATA_FOLDER = path.join(__dirname, '..', 'data');

const folder = (path) => ({
  exists: async () => {
    try {
      await fs.access(path);
      return true;
    } catch (err) {
      return false;
    }
  },
  remove: (recursive = true) => fs.rm(path, { recursive }),
  create: () => fs.mkdir(path),
});

const file = (path) => ({
  create: (data) => fs.writeFile(path, JSON.stringify(data)),
});

const popullateData = async () => {
  const dataFolder = folder(DATA_FOLDER);
  const usersFile = file(path.join(DATA_FOLDER, 'users.json'));
  const sessionsFile = file(path.join(DATA_FOLDER, 'sessions.json'));

  if (await dataFolder.exists()) await dataFolder.remove();

  await dataFolder.create();
  await usersFile.create([]);
  await sessionsFile.create([]);
};

popullateData();
