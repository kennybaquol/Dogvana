import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

    const [newSearch, setNewSearch] = useState('')
    // State for animals to be listed on the home page -KB
    const [currentAnimals, setCurrentAnimals] = useState([])

    // useEffect for fetching -KB
    useEffect(function () {
        async function getAnimals() {
            // *REPLACE THE BELOW LINE WITH API FETCH* -KB
            const animals = ['cat', 'dawg', 'butta dog']

            // fetch(url, {
            //     method: "GET",
            //     mode: "no-cors",
            //     headers: {
            //         Accept: "application/json",
            //         Authorization: `Bearer ${token}`
            //     }
            // })
            //     .then(res => res.json())
            //     .then((data) => {
            //         console.log(data)
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })

            setCurrentAnimals(animals)
        }
        getAnimals();
    }, []);


    function handleChange(event) {
        setNewSearch({ ...newSearch, [event.target.name]: event.target.value })
    }

    return (
        <div className="primary-search-bar">
            <form>
                <input type="text" placeholder="Search Terrier, Kitten, etc." onChange={handleChange} />
                <input type="text" placeholder="Enter your zip/address" onChange={handleChange} />
                <Link className="magnifying-glass" to="/search">🔍</Link>
                <br />
                {/* BELOW IS TEMPORARY, REPLACE WITH ANIMALCARDCOMPONENT -KB */}
                {currentAnimals.join(',')}
            </form>
        </div>
    )
}
