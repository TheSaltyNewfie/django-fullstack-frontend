import { useState } from 'react'
import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MyOrders from './components/MyOrders'
import Venues from './components/Venues'
import Events from './components/Events'


function App() {
  

  return (
	  <>
	  	<div className="main">
      		<Routes>
	  			<Route path="/" element={<Home />} />
				  <Route path="/venues" element={<Venues />} /> {/* Add the MyOrders route */}
				  <Route path="/events" element={<Events />} /> {/* Add the MyOrders route */}
				  <Route path="/myorders" element={<MyOrders />} /> {/* Add the MyOrders route */}
      		</Routes>
      	</div>
    </>
  )
}

export default App
