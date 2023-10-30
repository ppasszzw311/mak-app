import { useState, useEffect } from 'react'

const DropdownOption = (props) => {
    const { name, options, select } = props
    const [selected, setSelected] = useState(options[0])

    useEffect(() => {
        select(name, selected)
    }, [selected])

    const handleChange = (e) => {
      console.log(e.target.value)
      setSelected(e.target.value)
    }
  return (
    <select name={name} value={selected} onChange={handleChange}>
      {
        options.length > 0 && options.map((item, index) => {
          return (
            <option key={index} value={item}>{item}</option>
          )
        })
      }
    </select>
  )
}

export default DropdownOption
