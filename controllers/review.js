const Review = require('../models/Review')
const Location = require('../models/Location')

exports.review_create_get = async (req,res) => {
    const title = req.body
    const description = req.body
    const rating = req.body

    console.log(req.body)

    try{

        const review = new Review(req.body)
        // review.location = "kkkkkkkk"

        await review.save()
        res.json({review})
    }
    catch(err){
   console.log(err)
   res.send("error")
    }
}


exports.updateReview = async (req,res) => {
    const title = req.body
    const description = req.body
    const rating = req.body
const reviewFields = {}
if(title) reviewFields.title = title
if(description) reviewFields.description = description
if(rating) reviewFields.rating = rating

    try{
        let review = await Review.findByIdAndUpdate(req.params.review_id)
    if(!review){
        return res.status(404).json({message: 'Review not found'})
    }
    if(review.user.toString()!== req.user.id){
        return res.status(401).json({message: 'User not authorized'})

    }
    review = await Review.findByIdAndUpdate(req.params.id, 
        {$set: reviewFields},
        {new: true}
        )
    res.json({review})
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
}

exports.deleteReview = async (req,res) => {
    
    try {
        let review = await Review.findById(req.params.review_id)
        if(!review){
            return res.status(404).json({message: 'Review not found'})
        }
        if(review.user.toString()!== req.user.id){
            return res.status(401).json({message: 'User not authorized'})
    
        }
        await Review.findByIdAndRemove(req.params.review_id)
        res.json({message: 'Review removed'})
    }

    catch(err){
        console.log(err)
        res.send("error")
    }
}

exports.getReview = async (req,res) => {
    
    try {
        const reviews = await Review.find({location: req.params.location_id}).populate('location', 'name')
        res.json(reviews)
    }

    catch(err){
        console.log(err)
        res.send("error")
    }
}
