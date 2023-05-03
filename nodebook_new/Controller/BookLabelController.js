const booklabelSchema=require('../Schema/BookSchema')


const addBookLabel = (req,res)=>{


    const booklabel = new BookLabelSchema(req.body)
    booklabel.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding bookslabel",
            })
        }
        else{
            res.status(201).json({
                message:"booklabel added successfully",
                data:data
            })
        }

    })

}
const getBookLabelData = (req,res)=>{
    booklabelSchema.find((err,data)=>{
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
const updateBookLabel = (req,res)=>{

    const id = req.params.id

        booklabelSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating book",
            })
        }
        else{
            res.status(200).json({
                message:"book updated successfully",
            })
        }
    })



}
const getBookLabelById = (req,res)=>{

    var id = req.params.id

    booklabelSchema.findById(id,(err,data)=>{
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

    const deleteBookLabel = (req,res)=>{

        const id = req.params.id
        booklabelSchema.findByIdAndDelete(id,(err,success)=>{
            if(err){
                res.status(404).json({
                    message:"error in deleting book",
                })
            }
            else{
                res.status(200).json({
                    message:"book deleted successfully",
                    data:success
                })
            }
        })
    
    }
    const getBookLabelDataWithBook = (req,res)=>{

        bookSchema.find().populate('book').exec((err,data)=>{
            if(err){
                res.status(500).json({
                    message:"Error in getting users",
                    err:err
                })
            }
            else{
                if(data!=null || data!=undefined || data.length!=0){
                    res.status(200).json({
                        message:"Users fetched successfully",
                        data:data
                    })
                }
                else{
                    res.status(404).json({
                        message:"Users not found",
                    })
                }
    
            }
        })
    
    }
    const getBookLabelDataWithlabel = (req,res)=>{

        bookSchema.find().populate('author').exec((err,users)=>{
            if(err){
                res.status(500).json({
                    message:"Error in getting users",
                    err:err
                })
            }
            else{
                if(users!=null || users!=undefined || users.length!=0){
                    res.status(200).json({
                        message:"Users fetched successfully",
                        users:users
                    })
                }
                else{
                    res.status(404).json({
                        message:"Users not found",
                    })
                }
    
            }
        })
    
    }

module.exports={
    addBookLabel,
    getBookLabelData,
    getBookLabelById,
    updateBookLabel,
    deleteBookLabel,
    getBookLabelDataWithBook,
    getBookLabelDataWithlabel


}