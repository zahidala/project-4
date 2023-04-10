const Plan = require('../models/Plan');
const Location = require('../models/Location')

// Require Moment
// const moment = require('moment');

exports.plan_create_post = (req,res) =>{
    let plan = new Plan(req.body);

    // Save plan
    plan.save()
    .then((plans)=>{
        res.json({plans})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}

// HTTP GET - plan Index
exports.plan_index_get = (req, res) => {
    Plan.find().then(plans => {
        console.log("test")
        res.json({plans:plans})
    })
    .catch(err => {
        console.log(err);
    })
}


// HTTP GET - Load PLAN Edit Form
exports.plan_edit_get = (req, res) => {
    Plan.findById(req.query.id)
    .then(plan => {
        res.json({plan})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - plan Update
exports.plan_update_put = (req, res) => {
    console.log(req.body._id);
    Plan.findByIdAndUpdate(req.body._id, req.body, {new : true})
    .then((plan) => {
        // res.redirect("/plan/index");
        res.json({plan})
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Plan Delte
  exports.plan_delete_get = (req, res) => {
    console.log(req.query.id);
    Plan.findByIdAndDelete(req.query.id)
    .then((plan)=>{
        // res.redirect("/plan/index");
        res.json({plan})
    })
    .catch(err => {
        console.log(err);
    })
};
