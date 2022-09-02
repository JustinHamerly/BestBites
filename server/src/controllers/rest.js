const Restaurant = require('../models/RestSchema');

const getRests = async (req, res) => {
  try {
    const email = req.query.email;
    const userRests = await Restaurant.find({ email });
    res.status(200).send(userRests);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const createRest = async (req, res) => {
  try {
    const data = {...req.body};
    const newRest = await Restaurant.create(data);
    res.send(newRest).status(200)
  } catch (error) {
    res.send(error.message).status(500);
  }
}

module.exports = {
  getRests,
  createRest
}