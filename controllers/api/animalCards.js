const AnimalCard = require('../../models/animalCard')

module.exports = {
    index
}

async function index(req, res) {
    const animalCards = await AnimalCard.find({}).sort('name').exec()
    // re-sort based upon the sortOrder of the categories
    // animalCards.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(animalCards)
}