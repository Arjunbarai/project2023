const express = require('express')
const router = express.Router()
const userController= require('../Controller/UserController')

router.get('/getuser',userController.getUserDataWithRole)
router.post('/user',userController.registerUser)
// router.post('/user',userController.addUser)
router.get('/get/:id',userController.getUserById)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/user/login',userController.loginUser1)
router.get('/user',userController.getUserData)

module.exports = router