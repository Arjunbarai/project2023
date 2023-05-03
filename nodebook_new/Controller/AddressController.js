const addSchema = require('../Schema/AddressSchema');



const addForm = (req, res) => {


    const forms = new addSchema(req.body)
    forms.save((err, data) => {
        if (err) {
            console.log(err.name)
            res.status(500).json({
                message: "error in adding data",
                err: err
            })
        }
        else {
            res.status(201).json({
                message: "data added successfully",
                data: data
            })
        }

    })

}




const getFormData = (req, res) => {
    addSchema.find((err, data) => {
        if (err) {
            res.status(404).json({
                message: "error in fetching data"
            })
        }
        else {
            res.status(200).json({
                message: "data fetched successfully",
                data: data
            })
        }

    })

}


const deleteForm = (req, res) => {

    const id = req.params.id
    addSchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting data",
            })
        }
        else {
            res.status(200).json({
                message: "data deleted successfully",
                data: success
            })
        }
    })

}


const updateForm = (req, res) => {

    const id = req.params.id

    addSchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in updating data",
            })
        }
        else {
            res.status(200).json({
                message: "data updated successfully",
            })
        }
    })



}
const getFormById = (req, res) => {

    var id = req.params.id

    addSchema.findById(id, (err, data) => {
        if (err) {
            res.status(404).json({
                message: "error in fetching data"
            })
        }
        else {
            res.status(200).json({
                message: "data fetched successfully",
                data: data
            })
        }
    })


}

const getFormDataWithProduct = (req, res) => {

    addSchema.find().populate('user').populate('cart').populate({
        path: 'cart',
        populate: {
            path: 'product',
            
        }

    }).exec((err, product) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting product",
                err: err
            })
        }
        else {
            if (product != null || product != undefined || product.length != 0) {
                res.status(200).json({
                    message: "product fetched successfully",
                    product: product
                })
            }
            else {
                res.status(404).json({
                    message: "author not found",
                })
            }

        }
    })

}









module.exports = {
    addForm,
    getFormById,
    deleteForm,
    updateForm,
    getFormData,
    getFormDataWithProduct
}