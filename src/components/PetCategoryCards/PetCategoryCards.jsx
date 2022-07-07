import './PetCategoryCards.css'
import { Link } from 'react-router-dom'

export default function PetCategoryCards() {
  return (
    <>
      <header>
        <h1>Find your new best friend</h1>
        <span>Browse pets from over 11,500 shelters and rescues.</span>
      </header>
      <div className="pet-category-cards">
        <Link to="/search/dog" className="pet-category-link">Dog</Link>
        <Link to="/search/cat" className="pet-category-link">Cat</Link>
        <Link to="/search/other" className="pet-category-link">Other Animals</Link>
        <Link to="/search/shelters" className="pet-category-link">Shelters and Rescues</Link>
      </div>
    </>
  )
}
