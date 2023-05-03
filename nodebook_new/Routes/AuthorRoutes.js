const express =require('express')
const router = express.Router()
const authorController = require('../Controller/AuthorController')


router.post('/author',authorController.addAuthor)
router.get('/author',authorController.getAuthorData)
router.delete('/author/:id',authorController.deleteAuthor)
router.put('/author/:id',authorController.updateAuthor)
router.get('/author/:id',authorController.getAuthorById)
module.exports = router
