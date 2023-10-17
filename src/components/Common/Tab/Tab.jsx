import React from 'react'

export default function Tab() {
  return (

	<section className='flex gap-5 justify-center text-base leading-5 font-semibold capitalize text-center text-gray border-t-gray'>
		<h3 className='hover:border-b-2 py-4 text-gray'>Created</h3>
		<h3 className='hover:border-b-2 py-4 text-gray'>Owned</h3>
		<h3 className='hover:border-b-2 py-4 text-gray'>Collection</h3>
	</section>
  )
}
