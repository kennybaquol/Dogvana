import { Link } from "react-router-dom"
import './PetCard.css'

export default function PetCard({ animalData }) {
  
  return (
    <div className="search-page">
          {animalData.map(animal => (

            <div key={animal.id} className="pet-card">
              <Link to={`/animalCards/${animal.id}`} className="pet-card-link">
                <img className="pet-card-image" src={animal.photos[0].full} />
                <div className="pet-card-detail">{animal.name} • {animal.breeds.primary}</div>
              </Link>  
            </div>
          ))}
    </div>
  )
}
