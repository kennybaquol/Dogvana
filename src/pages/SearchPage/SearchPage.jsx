import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import PetCard from '../../components/PetCard/PetCard'
import './SearchPage.css'

export default function SearchPage({ showAnimals, client }) {
    const [filter, setFilter] = useState({
        type: [],
        breed: [],
        age: [],
        gender: [],
    })
    const { search } = useParams()
    const [animalData, setAnimalData] = useState([])
    const [loading, setLoading] = useState(false)


    async function showAnimals(animalType) {
        let apiResult = await client.animal.search({
            type: animalType,
            limit: 50,
        });

        return apiResult;
    }

    // When page first renders, 
    useEffect(() => {
        (async () => {
            let currentSearch = await showAnimals(search)
            let animalsWithPhotos = []
            const currentAnimals = currentSearch.data.animals
            currentAnimals.forEach((animal) => {
                if (animal.photos[0]) animalsWithPhotos.push(animal)
                return animalsWithPhotos
            })
            console.log(animalsWithPhotos)
            setAnimalData(animalsWithPhotos)
            setLoading(true)
        })()
    }, [])


    if(!loading) {
        return <div>Loading...</div>
    }

    return (
        <main className="search-page-container">
            <Filter filter={filter} />
            <PetCard animalData={animalData} /> 
        </main>
    )
}