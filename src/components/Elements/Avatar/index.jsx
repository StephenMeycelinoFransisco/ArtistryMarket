import React from 'react'

export default function Avatar({src, alt, className}) {
  return (
	<>
		<img src={src} alt={alt} className={`${className} object-cover object-center border w-full h-full`}/>
	</>
  )
}
