import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Artist from '../pages/Artist'
import Register from '../components/Auth/Register'
import NftDetails from '../pages/NftDetails'
import MarketPlace from '../pages/MarketPlace'

export default function Router() {
  return (
	<Routes>
		<Route path='/' element={ <Navigate to='/home' /> } />
		<Route path='/home' element={ <Home /> } />
		<Route path='/artist' element={ <Artist /> } />
		<Route path='/register' element={ <Register /> } />
		<Route path='/nft-detail' element={ <NftDetails /> } />
		<Route path='/marketplace' element={ <MarketPlace /> } />
	</Routes>
  )
}