import React from 'react'

export default function TabBar() {
  return (
	<>
		<article className='border-t-[1px] border-t-gray'>
			<div className="pt-3 px-8 flex justify-center gap-3">
				<h1 className='inline-block p-6 text-gray font-semibold text-base text-center capitalize leading-6 lg:px-20 xl:px-36 xl:text-lg border-b-4'>Created</h1>
				<h1 className='inline-block p-6 text-gray font-semibold text-base text-center capitalize leading-6 lg:px-20 xl:px-36 xl:text-lg'>Owned</h1>
				<h1 className='inline-block p-6 text-gray font-semibold text-base text-center capitalize leading-6 lg:px-20 xl:px-36 xl:text-lg'>Collection</h1>
			</div>
		</article>
	</>
  )
}
