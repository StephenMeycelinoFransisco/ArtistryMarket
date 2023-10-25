import React from 'react'

export default function Select({ name, value, onChange, options, className }) {
  return (
	<select name={name} value={value} onChange={onChange} className={`flex text-gray gap-3 px-5 py-4 bg-white items-center ${className}`}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
