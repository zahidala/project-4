const axios = require('axios')
require('dotenv').config()

exports.flight_info_get = (req, res) => {
    const ident = req.params.ident.toUpperCase() // captialize operator code in string to uppercase
    axios.get("https://aeroapi.flightaware.com/aeroapi/flights/" + ident, {
        headers: {
          Accept: "application/json; charset=UTF-8",
          "x-apikey": process.env.aeroapiKey,
        },
      })
      .then((resp) => {
        res.status(200).send(resp.data.flights);
      })
      .catch(() => {
        res.status(400).send({ message: "The flight number is invalid" });
      })
}

// exports.flight