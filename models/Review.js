const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    location: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    image: String
}, 
{ timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
