import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function PetCard({ animalData }) {
  // const [animalData, setAnimalData] = useState([])

  // useEffect(() => {
  //   (async () => {
  //     // if (animal.length > 0)
  //     console.log('Animals passed down to Pet car are: ')
  //     console.log(animals)
  //     await setAnimalData(animals)
  //   })()
  // }, [])

  return (
    <>
      <div>PetCard</div>
      <br />
      {animalData.length > 0 ?

        <>
          {animalData.map(animal => (

            <div key={animal.id} className="available-pets">
              <Link to={`/animalCards/${animal.id}`} className="available-pet-card">
                <img className="available-pet-card-image" src={animal.photos[0].full} />
              </Link>
              <br />
            </div>
          ))}
        </>
        :
        <h3>Lel.</h3>
      }
      {/* // Name, breed, size, age, & gender */}
    </>
  )
}
