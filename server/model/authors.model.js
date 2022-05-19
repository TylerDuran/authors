//------ Import mongoose to build a model -----------------------------------------------
const mongoose = require("mongoose");

//------The Schema - The rules that the entries in the DB must follow -------------------
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a author name"],
        minlength: [3, "{PATH} Must be at least 3 characters long, you gave just {VALUE}"]
    }
}, { timestamps: true });


//------ Create the Schema --------------------------------------------------------------
const Author = mongoose.model('Author', AuthorSchema);

// ------ Export the model --------------------------------------------------------------
module.exports = Author;
/////////////////////////////////////////////////////////////////////////////////////////