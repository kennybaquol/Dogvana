const AnimalCard = require('../../models/animalCard')

module.exports = {
    index,
    show
}

async function index(req, res) {
    const animalCards = await AnimalCard.find({}).sort('name').exec()
    // re-sort based upon the sortOrder of the categories
    // animalCards.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    console.log('Running index page for animalCards')
    res.json(animalCards)
}

async function show(req, res) {
    // Baby step
    console.log('Running show page for animalCards')
    res.json(animalCards)
}