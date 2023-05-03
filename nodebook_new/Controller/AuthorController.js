const authorSchema = require('../Schema/AuthorSchema');



const addAuthor = (req,res)=>{


    const author = new authorSchema(req.body)
    author.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding author",
            })
        }
        else{
            res.status(201).json({
                message:"author added successfully",
                data:data
            })
        }

    })

}




const getAuthorData = (req,res)=>{
    authorSchema.find((err,data)=>{
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


const deleteAuthor = (req,res)=>{

    const id = req.params.id
    authorSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting author",
            })
        }
        else{
            res.status(200).json({
                message:"author deleted successfully",
                data:success
            })
        }
    })

}


const updateAuthor = (req,res)=>{

    const id = req.params.id

        authorSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
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
const getAuthorById = (req,res)=>{

    var id = req.params.id

    authorSchema.findById(id,(err,data)=>{
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
    addAuthor,
    getAuthorData,
    deleteAuthor,
    updateAuthor,
    getAuthorById
}