const userModel = require('../../models/userSchema');

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { _authError() }
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await userModel.authenticateBearer(token);
    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    _authError();
  }

  function _authError() {
    res.status(403).send('Invalid Login');
  }
}