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

const requiredFields = ['name', 'email', 'geo', 'price', 'location', 'img', 'url', 'yelpId', 'categories'];

for ( let field of requiredFields ){ restSchema[field].required = true };

const Restaurant = mongoose.model('Restaurant', restSchema);

module.exports = Restaurant;
