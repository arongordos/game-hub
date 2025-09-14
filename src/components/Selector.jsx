const Selector = ({ label, options, value, onChange }) => {
  return (
    <div className="flex items-center">
      <label htmlFor={label} className="mr-2 font-bold">
        {label}:
      </label>
      <select
        className="rounded-lg bg-slate-100 px-2 py-1 text-center shadow-md"
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selector
