const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddSchema = new Schema({
    firstname: {
        type: String,

    },
    lastname: {
        type: String,

    },
    email: {
        type: String,

    },
    phone: {
        type: Number
    },
    pincode: {
        type: Number,

    },
    address: {
        type: String
    },
    city: {
        type: String,


    },
    state: {
        type: String
    },
    cart:{
        type: Schema.Types.ObjectId,
        ref: 'cart'
    },
    total: {
        type: Number,

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }


}, {
    timestamps: true
}
)

module.exports = mongoose.model('form', AddSchema)