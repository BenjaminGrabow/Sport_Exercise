const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./routes/auth-router.js');
const userPreferenceRouter = require('./routes/user-preference-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRouter);
server.use('/', userPreferenceRouter);

module.exports = server;