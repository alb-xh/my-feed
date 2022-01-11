const fs = require('fs/promises');
const path = require('path');
const supertest = require('supertest');
const server = require('../index');


const request = supertest(server);

describe('server', () => {
  describe('/', () => {
    it('responds with index.html file', async () => {
      const response = await request.get('/');

      const htmlFilePath = path.join(__dirname, '..', '..', 'client', 'build', 'index.html');
      const expectedFile = await fs.readFile(htmlFilePath, 'utf-8')

      expect(response.status).toBe(200)
      expect(response.text).toStrictEqual(expectedFile);
    });
  });
});
