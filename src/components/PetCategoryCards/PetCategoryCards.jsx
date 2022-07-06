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
        <span>
          <Link to="/search/dog">Dog</Link>
        </span>
        <span>
          <Link to="/search/cat">Cat</Link>
        </span>
        <span>
          <Link to="/search/other">Other Animals</Link>
        </span>
        <span>
          <Link to="/search/shelters">Shelters and Rescues</Link>
        </span>
      </div>
    </>
  )
}
