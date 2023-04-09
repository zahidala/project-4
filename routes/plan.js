const express = require('express');

const router = express.Router();

// using express.json will go from fe to be
router.use(express.json());

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const planCntrl = require("../controllers/plan");

// Routes
router.post("/plan/add" , isLoggedIn, planCntrl.plan_create_post);
router.get('/plan/index', isLoggedIn, planCntrl.plan_index_get);
router.get("plan/edit", isLoggedIn, planCntrl.plan_edit_get);
router.put("/plan/update" , isLoggedIn, planCntrl.plan_update_put);
router.delete("/plan/delete" ,isLoggedIn, planCntrl.plan_delete_get)

module.exports = router;


module.exports = router