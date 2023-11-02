import React from 'react'

export default function Avatar({src, alt, className}) {
  return (
	<>
		<img src={src} alt={alt} className={`${className} bg-cover bg-center border w-full h-full`}/>
	</>
  )
}
