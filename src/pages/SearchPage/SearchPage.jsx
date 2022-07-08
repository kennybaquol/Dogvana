import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import PetCard from '../../components/PetCard/PetCard'

export default function SearchPage({ showAnimals }) {
    const [filter, setFilter] = useState({
        breed: '',
        age: '',
        gender: '',
        sortBy: ''
    })
    const location = useLocation()
    const [type, setType] = useState('')
    const [animalData, setAnimalData] = useState([])

    function handleChange(event) {

    }

    // When page first renders, set the state of type using url params
    useEffect(() => {
        (async () => {
            let searchTerm = location.pathname
            searchTerm = searchTerm.slice(8)
            for (let i = 0; i < searchTerm.length; i++) {
                if (searchTerm.includes('%20')) {
                    searchTerm = searchTerm.replace('%20', ' ')
                }
            }
            setType(searchTerm)
            console.log('Type is now: ' + type)
            
            const result = await showAnimals(type, "poodle");
            const animals = []
            // Push 10 results to the animals array to be passed down to PetCard
            for (let i = 0; i < 10; i++) {
                animals.push(result.data.animals[i])
            }

            console.log('Use effect in SearchPage - animals array is now:')
            console.log(animals)
            await setAnimalData(animals)
        })()
    }, [])

    return (
        <>
            <Filter filter={filter} />
            {animalData.length > 0 ?
                <PetCard animalData={animalData} />
                :
                <h3>Loading...</h3>
            }
        </>
    )
}