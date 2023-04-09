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
router.put("/review/edit" ,isLoggedIn, reviewCntrl.updateReview);
router.delete("/review/delete" ,isLoggedIn, reviewCntrl.deleteReview);
router.get("/review/list" ,isLoggedIn, reviewCntrl.getReview);

module.exports = router
