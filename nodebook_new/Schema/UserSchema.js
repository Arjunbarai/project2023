const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String,
      
    },
    email:{
        type:String,
       
    },
    password:{
        type:String,
        
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:'role'
    },
    mobile:{
        type:Number,
       

    },
    gender:{
        type:String
    }
},{
    timestamps:true
}
)

module.exports = mongoose.model('users',UserSchema)