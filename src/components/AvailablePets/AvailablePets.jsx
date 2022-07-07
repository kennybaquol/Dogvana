import './AvailablePets.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AvailablePets({ animalData, showAnimals, setAnimalData }) {

  useEffect(() => {
    (async () => {
      const result = await showAnimals("Dog", "Bernedoodle");
      console.log(result.data.animals)
      setAnimalData(result.data.animals)
    })()
  }, [])

  return (
    <>
      <h1>Pets Available for Adoption</h1>
      { animalData.length > 0 ? 
      <div className="available-pets">
        <Link to="/" className="available-pet-card">
          <img className="available-pet-card-image"src={animalData[0].photos[0].full}/>
        </Link>
        <Link to="/" className="available-pet-card"href="/">
          <img className="available-pet-card-image" src={animalData[1].photos[0].full}/>
        </Link>
        <Link to="/" className="available-pet-card"href="/">
          <img className="available-pet-card-image" src={animalData[2].photos[0].full}/>
        </Link>
        <Link to="/" className="available-pet-card"href="/">
          <img className="available-pet-card-image" src={animalData[3].photos[0].full}/>
        </Link>
      </div>
      :
      <h1>hi</h1>
      }
    </>
  )
}
