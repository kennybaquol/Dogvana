const Favorite = require('../../models/favorite')
const User = require('../../models/user')

module.exports = {
    index,
    show,
    create
}

// Index route
async function index(req, res) {
    // Baby step
    console.log('Running index page for favorites')
    console.log(req.body.name)
    const currentUser = User.findOne({ name: req.body.name }, (error, user) => {
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

    const currentUser = await User.findOne({ name: req.body.name }, (error, user) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log('Found the current user')
            const id = req.params.id
            console.log('Looking for id of: ' + id)
            const exists = false
            for (let i = 0; i < user.favorites.length; i++) {
                if (user.favorites[i] === id) {
                    console.log('WE GOT EM')
                    exists = true
                    break
                }
            }
            if (exists === true) {
                res.json(user.favorites[i])
            }
            else {
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
    console.log(req.body.user.name)

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
            User.updateOne({ name: req.body.user.name },
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

    // Album.create({
    //     id: req.body.id,
    //     title: req.body.title,
    //     cover_medium: req.body.cover_medium,
    //     cover_big: req.body.cover_big,
    //     genre_id: req.body.genre_id,
    //     artistID: req.body.artistID,
    //     artistName: req.body.artistName,
    //     summaries: summary
    // }, (error, album) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     else {
    //         User.updateOne({ name: req.session.username },
    //             {
    //                 $addToSet: {
    //                     favorites: album
    //                 }
    //             }, (error, user) => {

    //                 if (error) {
    //                     console.log(error)
    //                 }
    //                 // Redirect to the index page, displaying the newly-added album under the user's favorites
    //                 else {
    //                     res.redirect('/albums')
    //                 }
    //             }
    //         )
    //     }
    // })

    // req.body.user = req.user._id
    // const favorite = Favorite.create(req.body)
    // const favorite = 'hello'
    // res.json(favorite)
}