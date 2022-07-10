import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Detail Page/DetailPage.css'
import * as favoritesAPI from '../../../utilities/favorites-api'
// const petfinder = require("@petfinder/petfinder-js");

export default function DetailPage({ user }) {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [animalData, setAnimalData] = useState([])
    const [favorite, setFavorite] = useState(false)

    // const apiKey = '6nnZCvrBXX6q999g5owZWFAbgJ2psZHtOkgsGYbCs7eo2zWXYb'

    // const apiSecret = 'YELMxB6N6bVaiMEz0f7GqqccmyF8bu04YiXyvAg8'

    // const client = new petfinder.Client({ apiKey: apiKey, secret: apiSecret });

    // async function getAnimal(animalId) {
    //     let apiResult = await client.animal.show(animalId)
    //     return apiResult
    // }

    // *MAKE AN UNFAVORITE HANDLE*
    const onFavorite = () => {
        if (!favorite) {
            setFavorite(true)
            // Call the create route for favorites
            const fav = favoritesAPI.addToFavorites(animalData, user)
        }
        else {
            setFavorite(false)
            // Call the delete route for favorites
            const unFav = favoritesAPI.removeFromFavorites(id)
        }

    }

    useEffect(() => {
        (async () => {
            const result = await favoritesAPI.getById(id);
            console.log(result)
            setAnimalData(result)
            setLoading(false)
        })()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="detail-page">
            <div className='button-container'>
                <Link to="/">
                    <button className="back-button">Go Back</button>
                </Link>
            </div>
            <div className="image-album">
                <img src={animalData.photo} alt="dog picture" />
            </div>
            <div className="animal-detail-container">
                <article className="animal-detail">
                    <h1 className="pet-name">{animalData.name}</h1>
                    <span>{animalData.breeds} • {animalData.contact},{animalData.contact}</span>
                    <span>{animalData.age} • {animalData.size} • {animalData.gender} • {animalData.colors} {animalData.colors}</span>
                    <h3>Meet {animalData.name}</h3>
                    <p>{animalData.description}</p>
                </article>
                <article>
                    <p>{animalData.note}</p>
                </article>
                <aside className="contact-info">
                    <div className="contact-card">
                        <legend>Contact</legend>
                        <span>{animalData.contact}</span>
                        <br />
                        <span> {animalData.contact}</span>
                        <br />
                        <span>{animalData.contact}, {animalData.contact} {animalData.contact}</span>
                    </div>
                    <div className='favorite-button'>
                        {!favorite ?
                            <button onClick={onFavorite}>Favorite ♡</button>
                            :
                            <button onClick={onFavorite}>Unfavorite ♡</button>
                        }

                    </div>
                </aside>
            </div>
        </div>

    )
}