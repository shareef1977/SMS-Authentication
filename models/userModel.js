const mongoose = require('mongoose') 

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true, 
        unique: true
    }
})

module.exports = mongoose.model('User', userSchema)