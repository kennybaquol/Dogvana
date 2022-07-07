import { useState, useEffect } from 'react';
import './AvailablePets.css'

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
      {animalData.length > 0 ?
        <div className="available-pets">
          <a className="available-pet-card" href="/"><img src={animalData[0].photos[0].full} /></a>
          <a className="available-pet-card" href="/"><img src={animalData[1].photos[0].full} /></a>
          <a className="available-pet-card" href="/"><img src={animalData[2].photos[0].full} /></a>
          <a className="available-pet-card" href="/"><img src={animalData[3].photos[0].full} /></a>
        </div>
        :
        <h3></h3>
      }
    </>
  )
}
