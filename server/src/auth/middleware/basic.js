const base64 = require('base-64');

const userModel = require('../../models/userSchema');

module.exports = async (req, res, next) => {
  try {

    if( !req.headers.authorization ){ return _authError(); }

    let basic = req.headers.authorization.split(' ').pop();
    let [username, password] = base64.decode(basic).split(':');

    req.user = await userModel.authenticateBasic(username, password);
    next();

  } catch (error) {
    _authError()
  }

  function _authError(){
    res.status(403).send('Invalid Login');
  }
}
