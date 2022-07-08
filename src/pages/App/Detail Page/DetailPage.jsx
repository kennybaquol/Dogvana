import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './DetailPage.css'
const petfinder = require("@petfinder/petfinder-js");

export default function DetailPage({ user }) {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [animalData, setAnimalData] = useState([])
    const [favorite, setFavorite] = useState(false)
    const [note, setNote] = useState(false)

    const apiKey = '6nnZCvrBXX6q999g5owZWFAbgJ2psZHtOkgsGYbCs7eo2zWXYb'

    const apiSecret = 'YELMxB6N6bVaiMEz0f7GqqccmyF8bu04YiXyvAg8'

    const client = new petfinder.Client({ apiKey: apiKey, secret: apiSecret });

    async function getAnimal(animalId) {
        let apiResult = await client.animal.show(animalId)
        return apiResult
    }

    const onFavorite = () => {
        if (!favorite) setFavorite(true)
        else setFavorite(false)
    }

    const noteChange = () => {
        if (!note) setNote(true)
        else setNote(false)
    }

    useEffect(() => {
        (async () => {
            const result = await getAnimal(id);
            console.log(result.data.animal)
            setAnimalData(result.data.animal)
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
                <img src={animalData.primary_photo_cropped.medium} alt="dog picture" />
            </div>
            <div className="animal-detail-container">
                <article className="animal-detail">
                    <h1 className="pet-name">{animalData.name}</h1>
                    <span>{animalData.breeds.primary} • {animalData.contact.address.city},{animalData.contact.address.state}</span>
                    <span>{animalData.age} • {animalData.size} • {animalData.gender} • {animalData.colors.primary} {animalData.colors.secondary}</span>
                    <h3>Meet {animalData.name}</h3>
                    <p>{animalData.description}</p>
                </article>
                <aside className="contact-info">
                    <div className="contact-card">
                        <legend>Contact</legend>
                        <span>{animalData.contact.email}</span>
                        <br />
                        <span> {animalData.contact.phone}</span>
                        <br />
                        <span>{animalData.contact.address.city}, {animalData.contact.address.state} {animalData.contact.address.postcode}</span>
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
            <p className='note'>
                    <h1>Notes</h1>
                    {!note ? 
                    <button onClick={noteChange}>Add a Note</button>
                        :   
                    <form onSubmit={noteChange}>
                        <input type="text" />
                        <input type="submit" />
                    </form>
                    }
                    
            </p>
        </div>

    )
}