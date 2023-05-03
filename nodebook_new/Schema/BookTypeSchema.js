const mongoose =require('mongoose')
const Schema =mongoose.Schema

const BookTypeSchema = new Schema ({

book_type_name:{
    type:String,
    require:true
}

})

module.exports=mongoose.model('booktype',BookTypeSchema)