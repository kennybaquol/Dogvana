const Favorite = require('../../models/favorite')
const User = require('../../models/user')
import { getUser } from '../../utilities/users-service'

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
    console.log('Running create route for favorites')
    console.log(req.body)

    Favorite.create({
        id: req.body.id,
        name: req.body.name
    }, (error, favorite) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log('created Favorite')
            User.updateOne({ name: getUser() },
                {
                    $addToSet: {
                        favorites: favorite
                    }
                }, (error, user) => {

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