export default function PetCard({ animal }) {
  return (
    <>
      <div>PetCard</div>
      {animal.length > 0 ?
        <div className="available-pets">
          <a className="available-pet-card" href="/"><img src={animal[0].photos[0].full} /></a>
      {/* // Name, breed, size, age, & gender */}
        </div>
        :
        <h3>Lel.</h3>
      }
    </>
  )
}
