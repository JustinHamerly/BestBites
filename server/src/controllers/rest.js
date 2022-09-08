const express = require('express');

const router = express.Router()

const Restaurant = require('../models/RestSchema');

let bearerAuth = require('../auth/middleware/bearer');

router.use(bearerAuth)

const getRests = async (req, res) => {
  try {
    const email = req.params.email;
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

const updateRest = async (req, res) => {
  try {
    const id = req.params.id;
    const data = {...req.body};
    const updated = await Restaurant.findByIdAndUpdate(id,data);
    res.send(updated).status(200);
  } catch (error) {
    res.send(error.message).status(500);
  }
}

const deleteRest = async (req, res) => {
  try {
    const id = request.params.id;
    await Restaurant.deleteOne({ _id: id})
    res.send('successfully deleted').status(200);
  } catch (error) {
    res.send(error.message).status(500);
  }
}

router.get('/rest/:email', getRests)
router.post('/rest', createRest);
router.put('/rest/:id', updateRest);
router.delete('/rest/:id', deleteRest);

module.exports = router;