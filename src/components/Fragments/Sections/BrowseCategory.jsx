import React from 'react'
import Title from '../../Common/Title/Title'
import Category from '../../Common/Card/Category'

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
