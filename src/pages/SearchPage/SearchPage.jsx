import {useState} from 'react'
import Filter from '../../components/Filter/Filter'
import PetCard from '../../components/PetCard/PetCard'

export default function SearchPage(){
    const [filter, setFilter] = useState({
        breed: '',
        age: '',
        gender: '',
        sortBy: ''
    })

    function handleChange(event) {
        
    }

    return(
        <>
            <Filter filter={filter}/>
            <PetCard/>
        </>
    )
}