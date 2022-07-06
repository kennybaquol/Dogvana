import { useEffect } from 'react'
import './AvailablePets.css'
// import showAnimals from '../../../api'


export default function AvailablePets({ animalData }) {
  // useEffect(function () {
  //     if (animalData[0].id) {
  //         console.log('Home, animal id: ' + animalData[0].id)
  //     }
  // }, [animalData]) 

  return (
    <>
      <h1>Pets Available for Adoption</h1>
      <div className="available-pets">
        {true ?
          <span>TRUE</span>
          :
          <span>NOT TRUE</span>
        }

        <span>Pet2</span>
        <span>Pet3</span>
        <span>Pet4</span>
      </div>
    </>
  )
}
