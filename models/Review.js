const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    review: 
    {
        type:String, required: true,
    },
    // description: {
    //     type:String, required: true,
    // },
    // rating: Number,
    // location: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Location'
    // }],
    // createdAt: {
    //     type: Date,
    //     // default: Date.now
    // },
    // image: {
    //     type: String
    // }
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
}, 
{ timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
