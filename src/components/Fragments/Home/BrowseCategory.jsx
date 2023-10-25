import React from 'react'
import Title from '../../Elements/Title/Title'
import Category from '../../Elements/Card/Category'

export default function BrowseCategory() {
  return (
	<>
		<Title title={"Browse Category"}/>
		<section className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
			<Category />
			<Category />
			<Category />
			<Category />
		</section>
	</>
  )
}
