// load model
const {Book} = require("../models")

module.exports = {
    index: (req, res) => {
        Book.findAll({
            order: [
                ["id", "DESC"]
            ]
        })
        .then(result => res.render("book/index", { title: "Books", books: result}))
    },
    show: (req,res) =>{
        Book.findOne({
            where: {id: Number(req.params.id)}
        })
        .then(result=> {
            if (result !== null){
                res.render("book/show", { title: "Detail Books", book: result})
            } else {
                res.status(400).send("Error - Book not found")
            }
        })
        .catch(err => res.status(404).send("Error - Book not found"))
    },
    new: (req,res) => {
        res.render("book/create", { title: "Create New Book"})
    },
    create: (req,res)=>{
        const { title, sinopsis, genre} = req.body
        Book.create({
            title: title,
            sinopsis: sinopsis,
            genre: genre,
        })
        .then(() => res.redirect("/books"))
        .catch(err => res.send('Failed - ${JSON.stringify(err.message)}'))
    }
}