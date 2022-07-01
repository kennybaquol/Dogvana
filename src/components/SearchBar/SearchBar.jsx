import { useState } from "react"

export default function SearchBar() {
    const [newSearch, setNewSearch] = useState('')

    function handleChange(event){
        setNewSearch({...newSearch, [event.target.name]: event.target.value})
    }

    return (
        <div className="primary-search-bar">
            <form>
                <input type="text" placeholder="Search Terrier, Kitten, etc." onChange={handleChange}/>
                <input type="text" placeholder="Enter your zip/address" onChange={handleChange}/>
                <input type="submit" value="🔍" />
            </form>
        </div>
    )
}
