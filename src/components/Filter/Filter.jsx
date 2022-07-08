import './Filter.css'

export default function Filter({ filter }) {

  return (
    <aside className="filter">
      <div className="filter-select-container">
        <span>Type</span>
        <select className="filter-select" >
          {filter.type.map(filterName => (
            < option value={filterName} >{filterName}</option>))}
        </select>
      </div>
      <div className="filter-select-container">
        <span>Breed</span>
        <select className="filter-select" >
          {filter.breed.map(filterName => (
            < option value={filterName} >{filterName}</option>))}
        </select>
      </div>
      <div className="filter-select-container">
        <span>Age</span>
        <select className="filter-select" >
          {filter.age.map(filterName => (
            < option value={filterName} >{filterName}</option>))}
        </select>
      </div>
      <div className="filter-select-container">
        <span>Gender</span>
        <select className="filter-select" >
          {filter.gender.map(filterName => (
            < option value={filterName}>{filterName}</option>))}
        </select>
      </div>
    </aside >
  )
}

