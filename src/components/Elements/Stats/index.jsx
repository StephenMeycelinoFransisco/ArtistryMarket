import React from 'react'

export default function Stats({value1, value2, value3, text1, text2, text3}) {
  return (
	<>
		<section className='grid grid-cols-3 gap-5 lg:flex lg:gap-10'>
			<div className="grid text-start">
				<h3 className='font-spaceMono font-bold text-xl leading-10 capitalize xl:text-2xl xl:font-bold'>{value1}</h3>
				<p className='text-base leading-6 xl:text-xl xl:capitalize xl:leading-10'>{text1}</p>
			</div>
			<div className="grid text-start">
				<h3 className='font-spaceMono font-bold text-xl leading-10 capitalize xl:text-2xl xl:font-bold'>{value2}</h3>
				<p className='text-base leading-6 xl:text-xl xl:capitalize xl:leading-10'>{text2}</p>
			</div>
			<div className="grid text-start">
				<h3 className='font-spaceMono font-bold text-xl leading-10 capitalize xl:text-2xl xl:font-bold'>{value3}</h3>
				<p className='text-base leading-6 xl:text-xl xl:capitalize xl:leading-10'>{text3}</p>
			</div>
		</section>
	</>
  )
}
