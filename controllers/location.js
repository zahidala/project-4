const Location = require('../models/Location')
const Review = require('../models/Review')
const Axios = require('axios')



// Get locations by city and country
exports.getLocations = async (req, res) => {
    const city = req.query.city;
    const country = req.query.country;
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},${country}&key=${process.env.GOOGLE_API_KEY}`);
      const { lat, lng } = response.data.results[0].geometry.location;
  
      const { data } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&lang=en_US&units=km&limit=10&offset=0&currency=USD&sort=relevance&location_id=${lat},${lng}`,
        {
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': process.env.TRAVEL_ADVISOR_API_KEY,
          },
        }
      );
  
      res.json(data.data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  };