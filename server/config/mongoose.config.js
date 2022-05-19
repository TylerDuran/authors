// ------ This is the Middleman that connects us to the DB ------------------------------
const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
    .then(() => console.log(`>>>> conected to ${DB} database <<<<`))
    .catch(err => console.log(`>>>> conected to ${DB} database <<<<`, err))
}
/////////////////////////////////////////////////////////////////////////////////////////
//------------------------------ THIS IS BOILER PLATE CODE ------------------------------