const booktypeSchema = require('../Schema/BookTypeSchema');



const addBookType = (req,res)=>{


    const booktype = new booktypeSchema(req.body)
    booktype.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding booktype",
            })
        }
        else{
            res.status(201).json({
                message:"booktype added successfully",
                data:data
            })
        }

    })

}




const getBookTypeData = (req,res)=>{
    booktypeSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data"  
            })
        }
        else{
            res.status(200).json({
                message:"data fetched successfully",
                data:data
            })
        }
        
    })

}


const deleteBookType = (req,res)=>{

    const id = req.params.id
    booktypeSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting booktype",
            })
        }
        else{
            res.status(200).json({
                message:"booktype deleted successfully",
                data:success
            })
        }
    })

}


const updateBookType = (req,res)=>{

    const id = req.params.id

        booktypeSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating author",
            })
        }
        else{
            res.status(200).json({
                message:"author updated successfully",
            })
        }
    })



}
const getBookTypeById = (req,res)=>{

    var id = req.params.id

    booktypeSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"error in fetching data"  
            })
        }
        else{
            res.status(200).json({
                message:"data fetched successfully",
                data:data
            })
        }
    })
    

}








module.exports = {
    addBookType,
    getBookTypeData,
    deleteBookType,
    updateBookType,
    getBookTypeById
}