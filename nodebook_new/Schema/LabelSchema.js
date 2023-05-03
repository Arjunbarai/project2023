const mongoose =require('mongoose')
const Schema = mongoose.Schema

const LabelSchema = new Schema ({
    labelname:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('label',LabelSchema)