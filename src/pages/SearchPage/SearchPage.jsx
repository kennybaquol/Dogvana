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
    // Left temporarily empty for testing -KB
    const animal = []

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
        })()
    }, [])

    useEffect(() => {
        (async () => {
            console.log('Type is now: ' + type)
        })()
    }, [type])


    // Then pass the info down through map to the PetCard component

    return (
        <>
            {/* {animalType.length > 0 ?
                {() => {console.log(animalType)}}
            :
            <h3></h3>
            } */}

            <Filter filter={filter} />
            <PetCard animal={animal} />
        </>
    )
}