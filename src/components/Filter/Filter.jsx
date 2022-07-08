export default function Filter({ filter }) {

  return (
    <aside className="filter">
      <select className="filter-select" >
        {filter.type.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
      <select className="filter-select" >
        {filter.breed.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
      <select className="filter-select" >
        {filter.age.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
      <select className="filter-select" >
        {filter.gender.map(filterName => (
          < option value={filterName} > {filterName}</option>))}
      </select>
    </aside >
  )
}

