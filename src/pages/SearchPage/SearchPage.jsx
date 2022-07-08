import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Filter from '../../components/Filter/Filter'
import PetCard from '../../components/PetCard/PetCard'

export default function SearchPage({ showAnimals, client }) {
    const [filter, setFilter] = useState({
<<<<<<< HEAD
=======
        type: ['cat', 'dog', 'other'],
>>>>>>> main
        breed: [],
        age: [],
        gender: [],
    })
    const location = useLocation()
    const [type, setType] = useState('')
    const [animalData, setAnimalData] = useState([])

    function handleChange(event) {

    }

    async function showAnimals(animalType) {
        let page = 1;

        let apiResult

        console.log('showAnimals, currently searching for: ' + animalType)
        // do {
        for (let i = 0; i < 2; i++) {
            apiResult = await client.animal.search({
                type: animalType,
                // breed: searchBreed,
                page,
                limit: 50,
            });
            console.log(apiResult.data.pagination, apiResult.data.pagination.total_pages)
            // let dogIdx = (page - 1) * 100;
            // apiResult.data.animals.forEach(function (animal) {
            // let firstImageKey = Object.keys(animal.photos[0])
            // console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url} photos:${JSON.stringify(animal.photos[0][firstImageKey])}`);
            // console.log(JSON.stringify(animal))
            // });

            page++;
            console.log('page count ', page)
            // } while (apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
            // } while (apiResult.data.animals.length < 20);
            // } while (page < 2);
        }

        return apiResult;
    }

    // When page first renders, 
    useEffect(() => {
        (async () => {
            // Set the state of type using url params
            let searchTerm = location.pathname
            searchTerm = searchTerm.slice(8)
            for (let i = 0; i < searchTerm.length; i++) {
                if (searchTerm.includes('%20')) {
                    searchTerm = searchTerm.replace('%20', ' ')
                }
                // *INCLUDE EXTRA LOGIC FOR ZIP CODE* -KB
            }
            let firstChar = searchTerm.charAt(0)
            firstChar = firstChar.toUpperCase()
            searchTerm = searchTerm.slice(1)
            searchTerm = (firstChar + searchTerm)
            console.log(searchTerm)
            await setType(searchTerm)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            console.log('Type is now: ')
            console.log(type)

            const result = await showAnimals(type);
            const animals = []

            function addMoreAnimals() {
                // Push 10 results to the animals array to be passed down to PetCard
                for (let i = 0; i < result.data.animals.length; i++) {
                    if (result.data.animals[i].photos.length > 0) {
                        console.log('i: ' + i)
                        let currentType = result.data.animals[i].type
                        currentType = currentType.toLowerCase()
                        if (currentType === type.toLowerCase()) {
                            animals.push(result.data.animals[i])
                        }
                        if (animals.length >= 10) break
                    }
                }
            }

            await addMoreAnimals()

            console.log('Result of fetch: ')
            console.log(result)
            console.log('Use effect in SearchPage - animals array is now:')
            console.log(animals)
            await setAnimalData(animals)
        })()
    }, [type])

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