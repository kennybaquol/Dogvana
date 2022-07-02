export default function Filter({filter}) {
  return (
    <aside className="filter">
        {Object.keys(filter).map(filterName => (
        <select className="filter-select"name={filterName}>
            <option value="placeholder">placeholder</option>
        </select>
        ))}
    </aside>
  )
}

