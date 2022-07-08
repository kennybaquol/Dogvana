import * as usersService from '../../utilities/users-service'
import SearchBar from '../../components/SearchBar/SearchBar'
import PetCategoryCards from '../../components/PetCategoryCards/PetCategoryCards'
import AvailablePets from '../../components/AvailablePets/AvailablePets'
import './Home.css'

export default function Home({ showAnimals }) {
    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <SearchBar />
            <PetCategoryCards />
            <AvailablePets showAnimals={showAnimals} />
        </>
    )
}