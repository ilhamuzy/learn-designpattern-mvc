const router = require("express").Router()

//Load controller
const book = require("./controllers/bookController.js");

//setting endpoint url
router.get("/books", book.index)
router.get("/books/show/:id", book.show)
router.get("/books/new", book.new)
router.post("/books", book.create)

//export route
module.exports = router;