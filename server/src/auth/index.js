const express = require('express');
const authRouter = express.Router();

//import basic middleware
let basicAuth;
//import bearer middleware
let bearerAuth;
//import user model
let userModel;

const handleSignup = async (req, res, next) => {
  try {
    const newUser = await userModel.create(req.body);
    const responseObj = {
      user: newUser,
      token: newUser.token
    };
    res.status(201).json(responseObj);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

const handleLogin = async (req, res, next) => {
  try {
    const userObj = {
      user: req.user,
      token: req.user.token
    };
    res.status(200).json(userObj);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const userData = await userModel.findAll({});
    const userList = userData.map(u => u.username);
    res.status(200).json(userList);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

authRouter.post('/signup', handleSignup);
authRouter.post('/login', basicAuth, handleLogin);
authRouter.get('/users', bearerAuth, getAllUsers);

module.exports = authRouter;
