import { useState } from "react"
import { useEffect } from "react"

export default function PetCard({ animal }) {
  const [currentAnimal, setCurrentAnimal] = useState({})

  useEffect(() => {
    (async () => {
      // if (animal.length > 0)
      console.log('Animal is: ')
      console.log(animal)
      setCurrentAnimal(animal)
    })()
  }, [])

  return (
    <>
      <div>PetCard</div>
      <br />
      {currentAnimal.length > 0 ?
        <div className="available-pets">
          <a className="available-pet-card" href="/"><img src={animal.photos[0].full} /></a>
        </div>
        :
        <h3>Lel.</h3>
      }
      <br />
      {/* // Name, breed, size, age, & gender */}
    </>
  )
}
