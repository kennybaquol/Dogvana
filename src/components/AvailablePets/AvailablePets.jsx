// import { useEffect } from 'react'
import './AvailablePets.css'
// import showAnimals from '../../../api'
import { Link } from 'react-router-dom'


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

        <Link to="/">
          <span>
            Pet1
          </span>
        </Link>

        <Link to="/">
          <span>
            Pet2
          </span>
        </Link>

        <Link to="/">
          <span>
            Pet3
          </span>
        </Link>

        <Link to="/">
          <span>
            Pet4
          </span>
        </Link>

      </div>
    </>
  )
}
