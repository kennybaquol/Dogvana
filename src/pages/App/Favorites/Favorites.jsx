import { useEffect } from "react"
// import * as favoritesCtrl from "../../../../controllers/api/favorites"
// import * as favoritesAPI from "../../../utilities/favorites-api"

export default function Favorites() {
    // getAll()
    useEffect(() => {
        // (async () => {
            console.log('Running useEffect for 1st render on Favorites page')
            // const favorites = favoritesAPI.getAll();

            // router.get('/', favoritesCtrl.index);

            // favoritesCtrl.index()
        // })()
    }, [])

    return (
        <h1>favorites</h1>
    )
}