import React from 'react'

export default function Tab() {
  return (
	<>
		<section className='mt-10 border-t border-t-gray'>
			<div className="grid grid-cols-3 text-center text-base capitalize text-gray leading-6 font-semibold">
				<div className="active:text-white active:border-b-2 active:border-b-gray py-5">Created</div>
				<div className="active:text-white active:border-b-2 active:border-b-gray py-5">Owned</div>
				<div className="active:text-white active:border-b-2 active:border-b-gray py-5">Collection</div>
			</div>
		</section>
	</>
  )
}
