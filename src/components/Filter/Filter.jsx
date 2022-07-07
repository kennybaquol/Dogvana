export default function Filter({filter}) {
  return (
    <aside className="filter">
        {Object.keys(filter).map(filterName => (
        <select className="filter-select"name={filterName}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Giraffe">Giraffe</option>
            <option value="Zubat">Zubat</option>
        </select>
        ))}
    </aside>
  )
}

