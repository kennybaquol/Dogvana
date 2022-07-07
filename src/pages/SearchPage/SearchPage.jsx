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
            let spaceCounter = 0
            for (let i = 0; i < searchTerm.length; i++) {
                if (searchTerm.includes('%20')) {
                    searchTerm = searchTerm.replace('%20', ' ')
                }
            }
            setType(searchTerm)

            console.log('Type is now: ' + type)
            // if (type.length > 0) {
            // showAnimals(type, "poodle")
            // }
            // setAnimalData([])
            const result = await showAnimals(type, "poodle");
            // Left temporarily empty for testing -KB
            const animals = []
            // Push 10 results to the animals array to be passed down to PetCard
            for (let i = 0; i < 10; i++) {
                animals.push(result.data.animals[i])
            }

            console.log('Use effect in SearchPage - animals array is now:')
            console.log(animals)
            // console.log('Use effect[] result data: ')
            // console.log(result.data.animals)
            await setAnimalData(animals)
            console.log('animal data from SearchPage 1st render:')
            console.log(animalData)
        })()
    }, [])

    // useEffect(() => {
    //     (async () => {

    //     })()
    // }, [type])


    // Then pass the info down through map to the PetCard component

    return (
        <>
            <Filter filter={filter} />
            {animalData.length > 0 ?
                // <>
                //     <div className="available-pets">
                //         {animalData.map((t, idx) => (
                //             <PetCard animal={t} key={idx} />
                //         ))}
                //     </div>
                //     <br />
                // </>
                <PetCard animalData={animalData} />
                :
                <h3>Loading...</h3>
            }
        </>
    )
}