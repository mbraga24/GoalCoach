import { useState } from 'react';

export default initialState => {
  const [ value, setValue ] = useState(initialState)

  const handleChange = e => {
    setValue(e.target.value)
  }
  const reset = () => {
    setValue("")
  }

  return [ value, handleChange, reset ]
}