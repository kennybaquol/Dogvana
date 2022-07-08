const Favorite = require('../../models/favorite')

module.exports = {
    index,
    show
}

async function index(req, res) {
    const favorites = await Favorite.find({}).sort('name').exec()
    // re-sort based upon the sortOrder of the categories
    // animalCards.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    console.log('Running index page for favorites')
    res.json(favorites)
}

async function show(req, res) {
    // Baby step
    console.log('Running show page for favorites')
    res.json(favorites)
}