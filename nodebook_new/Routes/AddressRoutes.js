const express =require('express')
const router = express.Router()
const addressController = require('../Controller/AddressController')

router.get('/getform',addressController.getFormDataWithProduct)
router.post('/form',addressController.addForm)
router.get('/form',addressController.getFormData)
router.delete('/form/:id',addressController.deleteForm)
router.put('/form/:id',addressController.updateForm)
router.get('/form/:id',addressController.getFormById)
module.exports = router