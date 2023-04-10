const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    title: 
    {
        type:String, required: true,
    },
    description: {
        type:String, required: true,
    },
    rating: Number,
    // location: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Location'
    // }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    // image: {
    //     type: String
    // }
}, 
{ timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
