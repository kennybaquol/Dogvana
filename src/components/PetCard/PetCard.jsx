import { Link } from "react-router-dom"
import './PetCard.css'

export default function PetCard({ animalData }) {
  return (
    <div className="search-page">
      {animalData.length > 0 ?
        <>
          {animalData.map(animal => (

            <div key={animal.id} className="pet-card">
              <Link to={`/animalCards/${animal.id}`} className="pet-card-link">
                <img className="pet-card-image" src={animal.photos[0].full} />
              </Link>
              <br />
            </div>
            
          ))}
          
          <button onClick={null} className='favorite-button'>add to favs</button>
          
        </>
        :
        <h3>Lel.</h3>
      }
    </div>
  )
}
