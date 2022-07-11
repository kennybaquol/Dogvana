import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../Detail Page/DetailPage.css'
import * as favoritesAPI from '../../../utilities/favorites-api'
import './FavoriteDetailsPage.css'

export default function DetailPage({ user }) {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [animalData, setAnimalData] = useState([])
    const [favorite, setFavorite] = useState(true)
    const [note, setNote] = useState(false)
    const [newNote, setNewNote] = useState('')

    function handleChange(event) {
        setNewNote({ ...newNote, [event.target.name]: event.target.value })
    }

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

    const noteChange = async (event) => {
        event.preventDefault()
        if (!note) setNote(true)
        else {
            setNote(false)
            console.log('user is done entering the note. now attempting to update')
            console.log(newNote.note)
            await favoritesAPI.updateNote(id, newNote)

            // Update animalData with new note
            const result = await favoritesAPI.getById(id);
            console.log(result)
            setAnimalData(result)
            setLoading(false)
            setNewNote(animalData.note)
        }
    }

    useEffect(() => {
        (async () => {
            const result = await favoritesAPI.getById(id);
            console.log(result)
            setAnimalData(result)
            setLoading(false)
            setNewNote(animalData.note)
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
                <img src={animalData.photos[0].full} alt="dog picture" />
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
            <article className="animal-note">
                    <p>{animalData.note}</p>
                </article>
            <p className='note'>
                <h1>Notes</h1>
                {!note ?
                    <button onClick={noteChange}>Add/Edit Note</button>
                    :
                    <form onSubmit={noteChange}>
                        <input type="text" placeholder={animalData.note} name="note" onChange={handleChange} />
                        <input type="submit" />
                    </form>
                }
            </p>
        </div>

    )
}