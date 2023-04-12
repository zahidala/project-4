const Review = require('../models/Review')
const Location = require('../models/Location')

exports.review_create_post = (req,res) => {
    console.log(req.body)
    let review = new Review(req.body);

    // Save author
    review.save()
    .then((reviews)=>{
        res.json({reviews})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}


exports.review_update_put = (req, res) => {
    console.log(req.body._id);
    Review.findByIdAndUpdate(req.body._id, req.body, {new : true})
    .then((review) => {
        res.json({review})
    })
    .catch(err => {
        console.log(err)
    });
}


  // HTTP DELETE -  review Delete
  exports.review_delete_get = (req, res) => {
    console.log(req.query.id);
    Review.findByIdAndDelete(req.query.id)
    .then((review)=>{
        res.json({review})
    })
    .catch(err => {
        console.log(err);
    })
};

// HTTP GET - reviews Index
exports.review_index_get = (req, res) => {
    Review.find().then(reviews => {
        console.log("test")
        res.json({reviews:reviews})
    })
    .catch(err => {
        console.log(err);
    })
}
