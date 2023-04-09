const express = require('express');

const router = express.Router();

// using express.json will go from fe to be
router.use(express.json());

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const reviewCntrl = require("../controllers/review");

// Routes
router.post("/review/add" ,isLoggedIn, reviewCntrl.review_create_get);
router.post("/review/edit" ,isLoggedIn, reviewCntrl.updateReview);
router.post("/review/delete" ,isLoggedIn, reviewCntrl.deleteReview);
router.post("/review/list" ,isLoggedIn, reviewCntrl.getReview);

module.exports = router;
