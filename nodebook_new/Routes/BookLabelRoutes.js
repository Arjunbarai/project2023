const express = require('express')
const router = express.Router()
const booklabelController= require('../Controller/BookLabelController')

router.get('/getlabel',booklabelController.getBookLabelDataWithlabel)
router.post('/bookl',booklabelController.addBookLabel)
router.get('/bookl/:id',booklabelController.getBookLabelById)
router.delete('/bookl/:id',booklabelController.deleteBookLabel)
router.put('/bookl/:id',booklabelController.updateBookLabel)
router.get('/bookl',booklabelController.getBookLabelData)
router.get('/getbook',booklabelController.getBookLabelDataWithBook)

module.exports = router