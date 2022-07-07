import { useEffect } from 'react'
import './DetailPage.css'
import * as animalCardsAPI from '../../../utilities/animalCards-api'

export default function DetailPage(){
    // *KB TESTING*
    // useEffect(function() {
    //     async function getAnimalsById() {
    //         const animals = await animalCardsAPI.getById()
    //         console.log(animals)
    //     }
    //     getAnimalsById()
    // })

    return(
        <div className="detail-page">
            <div className='button-container'>
                <button className="back-button">Go Back</button>
            </div>
            <h1>Animal Name</h1>
            <div className="image-album">
                <img src="https://placedog.net/500" alt="dog picture" />
            </div>
            <article className="animal-detail">
                <h1>Name</h1>
                <span>Animal Breed & Location</span>
                <span>Age, Size, Coat Color</span>
                <h3>Meet Animal Name</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vero, tempore obcaecati veniam qui aliquid vitae quisquam. Corrupti at iusto possimus sunt iure est provident unde labore, quisquam modi sed.</p>
                <p>Contact Information</p>
            </article>
        </div>
        
    )
}