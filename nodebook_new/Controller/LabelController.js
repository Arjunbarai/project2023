const labelSchema = require('../Schema/LabelSchema');



const addLabel = (req,res)=>{


    const label = new labelSchema(req.body)
    label.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error in adding label",
            })
        }
        else{
            res.status(201).json({
                message:"label added successfully",
                data:data
            })
        }

    })

}




const getLabelData = (req,res)=>{
    labelSchema.find((err,data)=>{
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


const deleteLabel = (req,res)=>{

    const id = req.params.id
    labelSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting label",
            })
        }
        else{
            res.status(200).json({
                message:"label deleted successfully",
                data:success
            })
        }
    })

}


const updateLabel = (req,res)=>{

    const id = req.params.id

        labelSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating label",
            })
        }
        else{
            res.status(200).json({
                message:"label updated successfully",
            })
        }
    })



}
const getLabelById = (req,res)=>{

    var id = req.params.id

    labelSchema.findById(id,(err,data)=>{
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
    addLabel,
    getLabelData,
    deleteLabel,
    updateLabel,
    getLabelById
}