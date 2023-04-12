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
router.post("/review/add" , isLoggedIn, reviewCntrl.review_create_post);
router.put("/review/edit" , reviewCntrl.review_update_put);
router.delete("/review/delete" , reviewCntrl.review_delete_get);
router.get("/review/list" , reviewCntrl.review_index_get);

module.exports = router
