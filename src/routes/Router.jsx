import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Artist from '../pages/Artist'

export default function Router() {
  return (
	<Routes>
		<Route path='/' element={ <Navigate to='/home' /> } />
		<Route path='/home' element={ <Home /> } />
		<Route path='/artist' element={ <Artist /> } />
	</Routes>
  )
}