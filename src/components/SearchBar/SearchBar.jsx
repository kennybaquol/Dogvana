import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

    const [newSearch, setNewSearch] = useState('')

    function handleChange(event) {
        setNewSearch({ ...newSearch, [event.target.name]: event.target.value })
        // console.log({newSearch})
    }

    return (
        <div className="primary-search-bar">
            <form>
                <input type="text" name="animal" placeholder="Search Terrier, Kitten, etc." onChange={handleChange} />
                <input type="text" name="zip code" placeholder="Enter your zip/address" onChange={handleChange} />
                <Link className="magnifying-glass" to={"search/" + newSearch.animal}>
                    <button type="submit">🔍</button>
                </Link>
                <br />
            </form>
        </div>
    )
}
