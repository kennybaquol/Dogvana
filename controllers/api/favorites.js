const Favorite = require('../../models/favorite')
const User = require('../../models/user')

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}

// Index route
async function index(req, res) {
    // Baby step
    console.log('Running index page for favorites')
    console.log(req.user.name)
    const currentUser = User.findOne({ name: req.user.name }, (error, user) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log('Found the current user')
            console.log('# of favorites that should pop up: ' + user.favorites.length)
            res.json(user.favorites)
        }
    })
}

// Show route
async function show(req, res) {
    // Baby step
    console.log('Running show page for favorites')

    // const currentUser = 
    // await 
    User.findOne({ name: req.user.name }, (error, user) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log('Found the current user')
            console.log(user)
            const id = req.params.id
            console.log('Looking for id of: ' + id)
            let exists = false
            for (let i = 0; i < user.favorites.length; i++) {
                console.log(user.favorites[i])
                if (user.favorites[i].id === id) {
                    console.log('WE GOT EM')
                    exists = true
                    res.json(user.favorites[i])
                    // break
                }
            }
            if (exists === false) {
                res.json(user.favorites)
            }
        }
    })
}

// Create route
async function create(req, res) {
    // Baby step
    console.log('Running create route for favorites')
    // console.log(req.body)
    console.log(req.body.user.user.name)

    const favorite = await Favorite.create({
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
        note: "Enter a personal note for yourself here!"
    }, (error, favorite) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log('created Favorite')
            // console.log(favorite)
            User.updateOne({ name: req.body.user.user.name },
                {
                    $addToSet: {
                        favorites: favorite
                    }
                }, (error) => {

                    if (error) {
                        console.log(error)
                        res.json(error)
                    }
                    else {
                        console.log('Successfully added favorite to user')
                        res.json(favorite)
                    }
                }
            )
        }
    })
}

// Update route
async function update(req, res) {
    // Baby step
    console.log('Running update route for favorites')

    // User.updateOne({ name: req.user.name }, (error, user) => {
    User.updateOne({
        name: req.user.name,
        'favorites.id': req.params.id
    },
        {
            $set: {
                // This is probably WRONG
                'favorites.$.note': req.body.note

            }
        }, (error) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log('Updated note successfully')
                res.json(error) // Maybe change?
            }
        }
    )
// })
}

// Delete route
async function destroy(req, res) {
    // Baby step
    console.log('Running delete page for favorites')
    console.log(req.user.name)

    // Find the user's favorites, and delete the current animal from it
    User.updateOne({ name: req.user.name },
        {
            $pull: {
                favorites: {
                    id: req.params.id
                }
            }
        }, (error) => {
            if (error) {
                console.log(error)
                res.json(error)
            } else {
                console.log('Deleted from favorites successfully')
                res.json(error) // Maybe change?
            }
        }
    )
}