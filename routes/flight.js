const express = require('express')
const router = express.Router();

const flightCntrl = require('../controllers/flight')

router.get('/:ident', flightCntrl.flight_info_get)

module.exports = router