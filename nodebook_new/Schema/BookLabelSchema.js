const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookLabelSchema = new Schema({
   
   
    book:{
        type:Schema.Types.ObjectId,
        ref:'book'
    },
    label:{
        type:Schema.Types.ObjectId,
        ref:'label'
    }
    
},
)

module.exports = mongoose.model('booklabel',BookSchema)