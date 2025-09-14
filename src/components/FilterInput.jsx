const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <input
      id="filter"
      className="w-lg rounded-lg bg-slate-100 p-2 shadow-md"
      type="text"
      value={filter}
      placeholder="Filter games by name..."
      onChange={(e) => onFilterChange(e.target.value)}
    />
  )
}

export default FilterInput
