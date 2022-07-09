import { useEffect } from "react"
import * as favoritesAPI from "../../../utilities/favorites-api"

export default function Favorites({ user }) {
    useEffect(() => {
        (async () => {
            console.log('Running useEffect for 1st render on Favorites page')
            // Call the index route for favorites
            const fav = favoritesAPI.getAll(user)
        })()
    }, [])

    return (
        <h1>favorites</h1>
    )
}