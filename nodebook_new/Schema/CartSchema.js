const mongoose=require('mongoose')
const Schema=mongoose.Schema


const CartSchema=new Schema({
    

    product:{
        type:Schema.Types.ObjectId,
           ref:'book'
    },
    qty:{
        type:Number,
        default:1
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
       
        
})
module.exports=mongoose.model('cart',CartSchema)