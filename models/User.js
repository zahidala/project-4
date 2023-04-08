// meow 
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String, 
        required: true,
        minlength: [3, "First name must be more than 3 characters"],
        maxlength: [99, "Name too long"]
    },
    lastName: {
        type: String, 
        required: true,
        minlength: [3, "Last name must be more than 3 characters"],
        maxlength: [99, "Name too long"]
    },
    emailAddress: {
        type: String, 
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String, 
        required: true,
        minlength: [6, "Minimum length must be 6 characters"]
    },
},
{
    timestamps: true
})


// verify password
UserSchema.methods.verifyPassword = function(password){
    console.log(password)
    console.log(this.password)
    return bcrypt.compareSync(password, this.password)
}

// User Model
const User = mongoose.model("User", UserSchema)

// Exports
module.exports = User
