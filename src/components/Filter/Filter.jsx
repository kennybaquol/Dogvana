export default function Filter({filter}) {
  const filterValues = Object.keys(filter)
  for (const key in filter){
    console.log(key)
  }
  return (
    <aside className="filter">
        {filterValues.map(filterName => (
        <select className="filter-select"name={filterName}>
            <option value={filterName}>{filterName}</option>
        </select>
        ))}
    </aside>
  )
}

