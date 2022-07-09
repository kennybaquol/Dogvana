const Favorite = require('../../models/favorite')
const User = require('../../models/user')

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
async function create(req, res, user) {
    // Baby step
    console.log('Running create route for favorites')
    // console.log(req.body)
    console.log(req.body.user.name)

    Favorite.create({
        id: req.body.animalData.id,
        photo: req.body.animalData.photos[0].full,
        name: req.body.animalData.name,
        breeds: [req.body.animalData.breeds.primary, req.body.animalData.breeds.secondary],
        age: req.body.animalData.age,
        size: req.body.animalData.size,
        gender: req.body.animalData.gender,
        colors: [req.body.animalData.colors.primary, req.body.animalData.colors.secondary, req.body.animalData.colors.tertiary],
        description: req.body.animalData.description,
        contact: [req.body.animalData.contact.email, req.body.animalData.contact.phone],
    }, (error, favorite) => {
        if (error, favorite) {
            console.log(error)
        }
        else {
            console.log('created Favorite')
            User.updateOne({ name: user.name },
                {
                    $addToSet: {
                        favorites: favorite
                    }
                }, (error) => {

                    if (error) {
                        console.log(error)
                    }
                    else {
                        console.log('Successfully added favorite to user')
                    }
                }
            )
        }
    })

    // req.body.user = req.user._id
    // const favorite = Favorite.create(req.body)
    const favorite = 'hello'
    res.json(favorite)
}