import * as usersService from '../../utilities/users-service'
import SearchBar from '../../components/SearchBar/SearchBar'

export default function Home(){
    async function handleCheckToken(){
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }
    return(
        <>
            <h1>Home</h1>
            <SearchBar />
        </>
    )
}