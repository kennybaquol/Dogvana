import {useState} from 'react'
import Filter from '../../components/Filter/Filter'
import PetCard from '../../components/PetCard/PetCard'

export default function SearchPage({ showAnimals }){
    const [filter, setFilter] = useState({
        breed: '',
        age: '',
        gender: '',
        sortBy: ''
    })
    const animal = []

    function handleChange(event) {
        
    }

    // Grab params from url to change the state of filter when the page renders

    return(
        <>
            <Filter filter={filter}/>
            <PetCard animal={animal}/>
        </>
    )
}