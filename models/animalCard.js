/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
const mongoose = require("./connection");

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

// Make animalCards schema
const animalCardsSchema = new Schema({
    name: String,
    category: String,
    // *ENTER THE REST HERE*
    dateUploaded: Date,
    note: [{ type: noteSchema }]
})

// make AnimalCard model
const AnimialCard = model("AnimalCard", animalCardsSchema)

////////////////////////////////////////////////
// Export Model
////////////////////////////////////////////////
module.exports = AnimialCard