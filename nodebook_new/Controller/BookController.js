const bookSchema = require('../Schema/BookSchema')


const addBook = (req, res) => {


    const book = new bookSchema(req.body)
    book.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: "error in adding books",
            })
        }
        else {
            res.status(201).json({
                message: "book added successfully",
                data: data
            })
        }

    })

}
const getBookData = (req, res) => {
    bookSchema.find((err, data) => {
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
const updateBook = (req, res) => {

    const id = req.params.id

    bookSchema.findByIdAndUpdate(id, req.body, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in updating book",
            })
        }
        else {
            res.status(200).json({
                message: "book updated successfully",
            })
        }
    })



}
const getBookById = (req, res) => {

    var id = req.params.id

    bookSchema.findById(id).populate("File").exec((err, data) => {
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



const getAllList = (req, res) => {
    const id = req.params.id;
    bookSchema.find({ user: id }).populate("author").populate("label").populate("File").populate("user").then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send(err.message);
        
    })

}


const deleteBook = (req, res) => {

    const id = req.params.id
    bookSchema.findByIdAndDelete(id, (err, success) => {
        if (err) {
            res.status(404).json({
                message: "error in deleting book",
            })
        }
        else {
            res.status(200).json({
                message: "book deleted successfully",
                data: success
            })
        }
    })

}


const getBookDataWithAuthor = (req, res) => {

    bookSchema.find().populate('author').populate('user').populate('File').exec((err, books) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting author",
                err: err
            })
        }
        else {
            if (books != null || books != undefined || books.length != 0) {
                res.status(200).json({
                    message: "author fetched successfully",
                    books: books
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
const getBookDataWithlabels = (req, res) => {



    bookSchema.find({ label: req.params.id }).populate('author').populate('user').populate('File').populate('label').exec((err, books) => {
        if (err) {
            res.status(500).json({
                message: "Error in getting author",
                err: err
            })
        }
        else {
            if (books != null || books != undefined || books.length != 0) {
                res.status(200).json({
                    message: "author fetched successfully",
                    books: books
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
const searchBook = async (req, res) => {
    const query = req.params.query;
    bookSchema.find(
        {
            $or: [{ title: { $regex: query, $options: "$i" } }],
        },
        (err, books) => {
            res.status(200).json({
                message: "Book fetched successfully",
                books: books,
            });
        }
    );
};



module.exports = {
    addBook,
    getBookData,
    getBookById,
    updateBook,
    deleteBook,

    getBookDataWithAuthor,
    getBookDataWithlabels,
    searchBook,
    getAllList



}