const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String
},
{
    timestamps: true
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location