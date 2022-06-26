const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Add Your Name']
    },
    email: {
        type: String,
        required: [true, 'Please Add Your Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Add Your PassCode']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)