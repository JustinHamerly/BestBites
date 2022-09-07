const express = require('express');
const authRouter = express.Router();

const { handleSignup, handleLogin, getAllUsers } = require('./handlers');

let basicAuth = require('./middleware/basic');
let bearerAuth = require('./middleware/bearer');

authRouter.post('/signup', handleSignup);
authRouter.post('/login', basicAuth, handleLogin);
authRouter.get('/users', bearerAuth, getAllUsers);

module.exports = authRouter;
