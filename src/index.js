require('dotenv').config();
const server = require('./server');

server.listen(
  process.env.SERVER_PORT,
  () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
  },
);
