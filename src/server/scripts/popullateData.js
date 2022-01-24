const path = require('path');
const fs = require('fs/promises');

const DATA_FOLDER = path.join(__dirname, '..', 'data');

const addFile = async (filename, data) => {
  const filePath = path.join(DATA_FOLDER, filename);
  await fs.writeFile(filePath, JSON.stringify(data));
};

const popullateData = async () => {
  await addFile('users.json', []);
  await addFile('sessions.json', {});
};

popullateData();
