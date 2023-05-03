const express = require('express')
const router = express.Router()
const cartController= require('../Controller/CartController')



router.get('/getloggedinusercart/:id',cartController.getAllCart);
router.post('/cart',cartController.addProduct)
router.get('/cart/:id',cartController.getProductById)
router.delete('/delete/:id',cartController.deleteProduct)
router.put('/update/:id/:scope',cartController.updateProduct)
router.get('/cart',cartController.getProductData)
router.put('/inccount/:id',cartController.incrementCount)
router.put('/deccount/:id',cartController.decrementCount)
module.exports = router