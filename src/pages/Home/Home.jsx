import * as usersService from '../../utilities/users-service'
import SearchBar from '../../components/SearchBar/SearchBar'
import PetCategoryCards from '../../components/PetCategoryCards/PetCategoryCards'
import AvailablePets from '../../components/AvailablePets/AvailablePets'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home({ animalData }) {
    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Home</h1>
            <SearchBar />
            <PetCategoryCards />
            <AvailablePets animalData={animalData} />
        </>
    )
}