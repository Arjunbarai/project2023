const express =require('express')
const router = express.Router()
const booktypeController = require('../Controller/BookTypeController')


router.post('/type',booktypeController.addBookType)
router.get('/type',booktypeController.getBookTypeData)
router.delete('/type/:id',booktypeController.deleteBookType)
router.put('/type/:id',booktypeController.updateBookType)
router.get('/type/:id',booktypeController.getBookTypeById)
module.exports = router
