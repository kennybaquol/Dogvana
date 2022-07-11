import { useState, useEffect } from "react"
import * as favoritesAPI from "../../../utilities/favorites-api"
import { Link } from "react-router-dom"
import './Favorites.css'

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
            <h1>Favorites</h1>
            <div className="favorite-pet-container">
            {favorites.length > 0 ?
                <>
                    {favorites.map(animal => (
                        <div key={animal.id}>
                            <Link to={`/favorites/${animal.id}`} className="favorite-pet-card">
                                <img className="favorite-pet-card-image" src={animal.photos[0].medium} />
                            </Link>
                            <div className="favorite-pet-card-name">{animal.name}</div>
                        </div>
                    ))}
                </>
                :
                <h3>No favorites found</h3>
            }
            </div>
        </>
    )
}