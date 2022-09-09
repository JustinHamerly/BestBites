module.exports = (req, res, next) => {
  const errObj = {status: 404, message: 'Not found!'}
  res.status(404).json(errObj)
}
