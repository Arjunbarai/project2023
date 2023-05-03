const express = require('express')
const router =express.Router()
const labelController =require('../Controller/LabelController')

router.post('/label',labelController.addLabel)
router.get('/label',labelController.getLabelData)
router.get('/label/:id',labelController.getLabelById)
router.put('/label/:id',labelController.updateLabel)
router.delete('/label/:id',labelController.deleteLabel)


module.exports=router;