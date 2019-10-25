const express = require("express");
const helmet = require("helmet");
const cors = require('cors')

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routes
server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, usersRouter)

module.exports = server;