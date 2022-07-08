import { useState, useEffect } from 'react';
import './AvailablePets.css'
import { Link } from 'react-router-dom'

export default function AvailablePets({ showAnimals }) {
  const [animalData, setAnimalData] = useState([])
  
  useEffect(() => {
    (async () => {
      const result = await showAnimals("Dog", "Bernedoodle");
      // console.log(result.data.animals)
      setAnimalData(result.data.animals)
    })()
  }, [])

  return (
    <>
      <h1>Pets Available for Adoption</h1>
      { animalData.length > 0 ? 
      <div className="available-pets">
        <Link to={`/animalCards/${animalData[0].id}`} className="available-pet-card">
          <img className="available-pet-card-image"src={animalData[0].photos[0].full}/>
        </Link>
        <Link to={`/animalCards/${animalData[1].id}`} className="available-pet-card"href="/">
          <img className="available-pet-card-image" src={animalData[1].photos[0].full}/>
        </Link>
        <Link to={`/animalCards/${animalData[2].id}`} className="available-pet-card"href="/">
          <img className="available-pet-card-image" src={animalData[2].photos[0].full}/>
        </Link>
        <Link to={`/animalCards/${animalData[3].id}`} className="available-pet-card"href="/">
          <img className="available-pet-card-image" src={animalData[3].photos[0].full}/>
        </Link>
      </div>
      :
      <h1 className="loading">Loading...</h1>
      }
    </>
  )
}
