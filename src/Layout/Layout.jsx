import React from 'react'
import Header from '../components/Fragments/Header/Header'
import Footer from '../components/Fragments/Footer/Footer'
import Routes from '../routes/Router'

export default function Layout() {
  return (
	<>
		<Header />
		<div>
			<Routes/>
		</div>
		<Footer />
	</>
  )
}

