import Selector from './Selector'

const LimitSelector = ({ limit, onLimitChange }) => {
  const limitOptions = [
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ]
  return (
    <Selector
      label="Show"
      options={limitOptions}
      value={limit}
      onChange={onLimitChange}
    />
  )
}

export default LimitSelector
