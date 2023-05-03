const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const userRoutes = require('./Routes/UserRoutes')
const roleRoutes = require('./Routes/RoleRoutes')

const authorRoutes = require('./Routes/AuthorRoutes')
const booktypeRoutes = require('./Routes/BookTypeRoutes')
const labelRoutes = require('./Routes/LabelRoutes')
const bookRoutes = require('./Routes/BookRoutes')
const booklabelRoutes = require('./Routes/BookLabelRoutes')
const FileUploadRoutes = require('./Routes/FileUploadRoutes')
const CartRoutes = require('./Routes/CartRoutes')
const AddressRoutes = require('./Routes/AddressRoutes')


app.use('/upload', FileUploadRoutes)
app.use('/role', roleRoutes)
app.use('/user', userRoutes)
app.use('/author', authorRoutes)
app.use('/type', booktypeRoutes)
app.use('/label', labelRoutes)
app.use('/book', bookRoutes)
app.use('/bookl', booklabelRoutes)
app.use('/cart', CartRoutes)
app.use('/form', AddressRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/node_newbook", {}, (err) => {
    if (err) {
        console.log("error in db connections....")
    }
    else {
        console.log("db connected....")
    }
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})