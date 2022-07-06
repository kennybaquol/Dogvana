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
        <div>
            <button>Go Back</button>
            <h1>Animal Details Page</h1>
            <div>animal details</div>
            <div>favorites</div>
        </div>
        
    )
}