const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BookSchema = new Schema({

    File: {
        type: Schema.Types.ObjectId,
        ref: 'FileUpload'
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'author'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    qty: {
        type: Number
    },
    description: {
        type: String
    },
    isCharity: {
        type: Boolean,
        default: true
    },
    label: {
        type: Schema.Types.ObjectId,
        ref: 'label'
    },

})
module.exports = mongoose.model('book', BookSchema)