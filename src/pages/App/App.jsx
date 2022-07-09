import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import SearchPage from '../SearchPage/SearchPage'
import Home from '../Home/Home'
import { Routes, Route, useParams } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'
import DetailPage from './Detail Page/DetailPage';
import React from 'react';
import SeparationBand from '../../components/SeparationBand/SeparationBand';
import Favorites from './Favorites/Favorites';

const petfinder = require("@petfinder/petfinder-js");
// const apiKey = process.env.API_KEY
const apiKey = '6nnZCvrBXX6q999g5owZWFAbgJ2psZHtOkgsGYbCs7eo2zWXYb'
// const apiSecret = process.env.SECRET
const apiSecret = 'YELMxB6N6bVaiMEz0f7GqqccmyF8bu04YiXyvAg8'
const client = new petfinder.Client({ apiKey: apiKey, secret: apiSecret });

export default function App() {
  const [user, setUser] = useState(getUser())
  const [favorite, setFavorite] = useState([])

  let { id } = useParams()

  const animalCategories = ['cat', 'bird', 'dog', 'horse', 'rabbit']
  const shuffleAnimals = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  async function showAnimals(animalType, searchBreed) {
    let page = 1;

    // *TEST* -KB
    // console.log('key and secret: ')
    // console.log(apiKey)
    // console.log(apiSecret)
    // *TEST* -KB

    let apiResult
    do {
      apiResult = await client.animal.search({
        type: animalType,
        breed: searchBreed,
        page,
        limit: 100,
      });
      // console.log(apiResult.data.pagination, apiResult.data.pagination.total_pages)
      let dogIdx = (page - 1) * 100;
      apiResult.data.animals.forEach(function (animal) {
        // let firstImageKey = Object.keys(animal.photos[0])[0]
        // console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url} photos:${JSON.stringify(animal.photos[0][firstImageKey])}`);
        // console.log(JSON.stringify(animal))
      });

      page++;
      console.log('page count ', page)
    } while (apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);

    return apiResult;
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <SeparationBand />
          <Routes>
            <Route path="/" element={<Home user={user} showAnimals={showAnimals} />} />
            <Route path="/search/*" element={<SearchPage 
            // showAnimals={showAnimals} 
            client={client}
            />} />
            <Route path="/animalCards/:id" element={<DetailPage user={user} />} />
            <Route path="/favorites" element={<Favorites user={user}/>}/>
            <Route path="/favorites/:id" element={<Favorites/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
