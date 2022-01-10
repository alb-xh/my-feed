const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

describe('server', () => {
  describe('/', () => {
    it(`responds with 'Hello World'`, async () => {
      const response = await request.get('/');

      expect(response.status).toBe(200)
      expect(response.text).toBe('Hello World')
    });
  });
});
