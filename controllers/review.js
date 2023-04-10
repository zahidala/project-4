const Review = require('../models/Review')
const Location = require('../models/Location')

exports.review_create_get = async (req,res) => {
    const title = req.body
    const description = req.body
    const rating = req.body

    console.log(req.body)

    try{

        const review = new Review(req.body)
       
        // review.title = title
        // review.description = description
        // review.rating = rating
        // review.user = req.user.id
        // review.location = req.params.location_id

        await review.save()
        res.json({review})
    }
    catch(err){
   console.log(err)
   res.send("error")
    }
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
