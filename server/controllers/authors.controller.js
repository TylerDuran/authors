//------ Controller is for CRUD ---------------------------------------------------------
//------ Import the MODEL to use Queries ------------------------------------------------
const Author = require("../model/authors.model");

//------ The way below exports as a whole Object and Each Key has a value as a Function -
module.exports = {

    //------ Read all ------
    findAll: (req, res) => {
        Author.find()
            .then( (authors) => {
                // whatever we choose to come back to the client, the client has to accept here
                console.log(authors);
                return res.json(authors)
            })
            .catch(err => res.json(err))
    },

    //------ Create --------
    create: (req, res) => {
        // Pass in body data
        console.log(req.body);
        Author.create(req.body)
            .then( (newAuthor) => {
                console.log("DB success, new Author created");
                return res.json(newAuthor)
            })
            .catch(err => {
                console.log("DB ERROR create new Author FAILED");
                return res.status(400).json(err)
            })
    },

    // ------ Read one -----
    findOne: (req, res) => {
        console.log(req.params);
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err))

    },

    // ------ Update -------
    update: (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("UPDATE OBJ:", req.body);
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => {
                console.log("DB ERROR Updated new Author FAILED");
                return res.status(400).json(err)
            })
    },

    // ------ Delete -------
    delete: (req, res) => {
        console.log(req.params.id);
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}