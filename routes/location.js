const express = require('express');

const router = express.Router();

// using express.json will go from fe to be
router.use(express.json());

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const locationCntrl = require("../controllers/location");

// Routes
router.post("/location/list" ,isLoggedIn, locationCntrl.getLocations);

module.exports = router;