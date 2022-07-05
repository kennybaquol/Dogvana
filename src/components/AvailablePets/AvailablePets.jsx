import './AvailablePets.css'
import showAnimals from '../../../api'


export default function AvailablePets() {
  return (
    <>
        <h1>Pets Available for Adoption</h1>
        <div className="available-pets">
            <span>Pet 1</span>
            <span>Pet2</span>
            <span>Pet3</span>
            <span>Pet4</span>
        </div>
    </>
  )
}
