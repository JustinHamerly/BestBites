module.exports = function myLogger(req, res, next){
  console.log(' ');
  console.log('>>>>> LOGGER <<<<<');
  console.log('Request Made: ', req.method);
  console.log(' ');
  next();
}