/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
// const mongoose = require("./connection");
const mongoose = require('mongoose')

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose

// Make note schema
const noteSchema = new Schema({
    comment: String,
    // *ENTER THE REST HERE*
})

// Make favorites schema
const favoritesSchema = new Schema({
    id: String,
    photo: String,
    name: String,
    breeds: [],
    age: String,
    size: String,
    gender: String,
    colors: [],
    description: String,
    contact: [],
    note: [{ type: noteSchema }]
})

// make AnimalCard model
const Favorite = model("Favorite", favoritesSchema)

////////////////////////////////////////////////
// Export Model
////////////////////////////////////////////////
module.exports = Favorite