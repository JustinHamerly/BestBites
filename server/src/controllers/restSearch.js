const axios = require('axios');

const searchRests = async (req, res) => {
  const search = req.query.search;
  const location = req.query.loc;
  const key = process.env.YELP_API_KEY;
  const config = {
    baseURL: 'https://api.yelp.com/v3/businesses/search',
    method: 'get',
    params: {
      location: location,
      term: search,
      limit: 10,
    },
    headers: {
      Authorization: `Bearer ${key}`
    }
  }
  
  try {
    const yelpResponse = await axios(config);
    const data = yelpResponse.data.businesses.map(r => new Restaurant(r));
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

class Restaurant{
  constructor(restaurant){
    this.yelpid = restaurant.id,
    this.name = restaurant.name,
    this.img = restaurant.image_url,
    this.url = restaurant.url,
    this.categories = restaurant.categories,
    this.geo = restaurant.coordinates,
    this.price = restaurant.price,
    this.location = restaurant.location
  }
}

module.exports = {
  read: searchRests,
}