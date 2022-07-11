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

// Make favorites schema
const favoritesSchema = new Schema({
    id: String,
    photos: [],
    name: String,
    breeds: {},
    age: String,
    size: String,
    gender: String,
    colors: {},
    description: String,
    contact: {},
    note: String
})

// make Favorite model
const Favorite = model("Favorite", favoritesSchema)

////////////////////////////////////////////////
// Export Model
////////////////////////////////////////////////
module.exports = Favorite