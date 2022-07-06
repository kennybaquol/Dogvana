import { useState } from "react"
import { Link } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

    const [newSearch, setNewSearch] = useState('')
<<<<<<< HEAD
    // State for animals to be listed on the home page -KB
    const [currentAnimals, setCurrentAnimals] = useState([])

=======
>>>>>>> main

    function handleChange(event) {
        setNewSearch({ ...newSearch, [event.target.name]: event.target.value })
    }

    return (
        <div className="primary-search-bar">
            <form>
                <input type="text" name="animal" placeholder="Search Terrier, Kitten, etc." onChange={handleChange} />
                <input type="text" name="zip" placeholder="Enter your zip/address" onChange={handleChange} />
                <Link className="magnifying-glass" to={"search/" + newSearch.animal + "+" + newSearch.zip}>
                    <button type="submit">🔍</button>
                </Link>
                <br />
            </form>
        </div>
    )
}
