import { useState, useEffect } from "react"
import * as favoritesAPI from "../../../utilities/favorites-api"
import { Link } from "react-router-dom"

export default function Favorites({ user }) {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        (async () => {
            console.log('Running useEffect for 1st render on Favorites page')
            console.log(user)
            // Call the index route for favorites
            const fav = await favoritesAPI.getAll()
            console.log(fav)
            setFavorites(fav)
        })()
    }, [])

    return (
        <>
            <h1>favorites</h1>
            {favorites.length > 0 ?
                <>
                    {favorites.map(animal => (
                        <div key={animal.id}>
                            <Link to={`/favorites/${animal.id}`} className="available-pet-card">
                                <img className="available-pet-card-image" src={animal.photo} />
                            </Link>
                            <br />
                            <h3>{animal.note}</h3>
                        </div>
                    ))}
                </>
                :
                <h3>No favorites found</h3>
            }
        </>
    )
}