import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {

    // *REPLACE WITH PULL FROM .ENV
    // const key = process.env.API_KEY
    // const key = '6nnZCvrBXX6q999g5owZWFAbgJ2psZHtOkgsGYbCs7eo2zWXYb'
    // const secret = 'YELMxB6N6bVaiMEz0f7GqqccmyF8bu04YiXyvAg8'
    // const url = 'https://api.petfinder.com/v2/animals'
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2bm5aQ3ZyQlhYNnE5OTlnNW93WldGQWJnSjJwc1pIdE9rZ3NHWWJDczdlbzJ6V1hZYiIsImp0aSI6IjRiZjc0MzJlY2VlMmM5M2E4M2Y3YjdiYTUwZDZkZmZiZjYyZmFiZGU5OTNkYTMyYWM3ZGRlYTdhYzMwZWVmNTlkMGVhMTZiODc3ZTdiZmZmIiwiaWF0IjoxNjU2Nzk4NjcxLCJuYmYiOjE2NTY3OTg2NzEsImV4cCI6MTY1NjgwMjI3MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.hJI5V4xhoBJ54V7AtIGsdtAbugEVMRFjH-JM817qNfIGqMsw6Fz_YJM6NOYKEFP4_168NXpdrkE6Hvg5Xzw7l8d8AYPDc9o8GTfRtLsa6jVJFyYUgivX_mWxIyMbAH91pkzNKhdUgLYAkbhy39sKi67ETU31WC1Fo0tsx3uMaPfGyGadGxUpXNGFuCerTZK1Y8Vyh6fjI3s23VWbQa46fBeY6thr4jCGjWcHdF8tEFm-2pBA8erR5hg3ONmluwQlNU9fgZKj6cKMNcds9hsNcRXqisohVQpCMXF8B7MIJLaQPRjMXGOyPRIsavq5_qZHWAPe_yuClSR1iiKvAXaRBQ"}%'

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
