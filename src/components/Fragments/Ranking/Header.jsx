import React from 'react'

export default function Header() {
  return (
	<article className='border rounded-full border-gray'>
		<div className="flex justify-between px-5 py-3 lg:px-8">
			<div className="flex gap-5 items-center">
				<h5 className='text-gray font-spaceMono text-base leading-6'>#</h5>
				<caption className='text-gray text-sm font-spaceMono leading-6'>Artist</caption>
			</div>
			<div className="flex gap-5 items-center lg:gap-8 xl:gap-12">
				<h5 className='hidden text-gray font-spaceMono text-sm leading-6 lg:flex'>Change</h5>
				<h5 className='hidden text-gray font-spaceMono text-sm leading-6 xl:flex'>NFTs Sold</h5>
				<h5 className='text-gray font-spaceMono text-sm leading-6'>Volume</h5>
			</div>
		</div>
	</article>
  )
}
