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

        <Link to="/search/dog">
          <span>
            Dog
          </span>
        </Link>
        <Link to="/search/cat">
          <span>
            Cat
          </span>
        </Link>
        <Link to="/search/other">
          <span>
            Other Animals
          </span>
        </Link>
        <Link to="/search/shelters">
          <span>
            Shelters and Rescues
          </span>
        </Link>

      </div>
    </>
  )
}
