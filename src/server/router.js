const express = require('express');

const { UsersRoute } = require('./routes');

const router = express.Router();
router.use('/users', UsersRoute);

module.exports = router;
