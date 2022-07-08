const Favorite = require('../../models/favorite')

module.exports = {
    index,
    show,
    create
}

// Index route
async function index(req, res) {
    await console.log('Running index page for favorites')
    // const favorites = await Favorite.find({}).sort('name').exec()
    // re-sort based upon the sortOrder of the categories
    // animalCards.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    // res.json(favorites)
}

// Show route
async function show(req, res) {
    // Baby step
    console.log('Running show page for favorites')

    const favorite = await Favorite.findById(req.params.id);
    res.json(favorite)
}

// Create route
async function create(req, res) {
    // Baby step
    await console.log('Running create route for favorites')
    // req.body.user = req.user._id
    // const favorite = Favorite.create(req.body)
    const favorite = 'hello'
    res.json(favorite)
}