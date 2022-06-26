const mongoose = require('mongoose')

const pointSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    username: {
        type: String,
        required: [true, 'Please Add Your UserName']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Point', pointSchema)