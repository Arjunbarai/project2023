const cartSchema = require('../Schema/CartSchema')

const addProduct = async (req, res) => {
    const user = req.body.user;
    const product = req.body.product;
    const cartItem = await cartSchema.findOne({ user: user, product: product });
    if (cartItem) {
        // If the cart item already exists, increase its quantity by 1
        cartItem.qty += 1;
        await cartItem.save();
        res.status(200).json({
            message: 'Product quantity increased in cart',
            data: cartItem
        });
    } else {
        // If the cart item doesn't exist, create a new one
        const newCartItem = new cartSchema({
            user: user,
            qty: req.body.qty,
            product: product
        });
        await newCartItem.save();
        res.status(200).json({
            message: 'Product added to cart',
            data: newCartItem
        });
    }
};
const getProductData = (req, res) => {
    cartSchema.find((err, data) => {
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
const updateProduct = (req, res) => {

    const id = req.params.id
    console.log(id)
    console.log(req.body)

    cartSchema.findByIdAndUpdate(id, req.body, (err, success) => {
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
const getProductById = (req, res) => {

    var id = req.params.id

    cartSchema.findById(id, (err, data) => {
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

const deleteProduct = (req, res) => {

    const id = req.params.id
    cartSchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting product",
            })
        }
        else {
            res.status(200).json({
                message: "product deleted successfully",
                data: success
            })
        }
    })

}




const getAllCart = (req, res) => {
    const id = req.params.id;
    cartSchema.find({ "user": id }).populate("product").populate({
        path: "product",
        populate: {
            path: "File",
        },
    }).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })

}



const incrementCount = async (req, res) => {
    const id = req.params.id;
    const findproduct = await cartSchema.findById(id);
    if (findproduct) {
        const proQty = findproduct.qty + 1;
        cartSchema.updateOne({ _id: id }, { $set: { "qty": proQty } }, (err, data) => {
            res.status(200).json({
                message: 'Food qty increase to cart',
                data: data
            })
        })
    }

}

const decrementCount = async (req, res) => {
    const id = req.params.id;
    const findproduct = await cartSchema.findById(id);
    if (findproduct) {
        const proQty = findproduct.qty - 1;
        cartSchema.updateOne({ _id: id }, { $set: { "qty": proQty } }, (err, data) => {
            res.status(200).json({
                message: 'Food qty decrease to cart',
                data: data
            })
        })
    }

}



module.exports = {
    addProduct,
    getProductData,
    getProductById,
    updateProduct,
    deleteProduct,

    getAllCart,
    incrementCount,
    decrementCount



}