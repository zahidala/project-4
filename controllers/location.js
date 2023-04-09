const Location = require('../models/Location')
const Review = require('../models/Review')
const Axios = require('axios')

// GET /locations
exports.getlocations = async (req, res) => {
  const city = req.query.city
  const country = req.query.country

  Axios.get ('')

    try {
        const locations = await Location.find({ city: city, country: country })
        res.status(200).json(locations)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
