const mongoose = require('mongoose');

const { Schema } = mongoose;

const restSchema = new Schema({
  name: String,
  img: String,
  url: String,
  yelpId: String,
  categories: Array,
  geo: Array,
  price: String,
  location: Array,
  email: String,
});

const Restaurant = mongoose.model('Restaurant', restSchema);

module.exports = Restaurant;
