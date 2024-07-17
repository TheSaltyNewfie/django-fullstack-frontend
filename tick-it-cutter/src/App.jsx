import { useState } from 'react'
import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MyOrders from './components/MyOrders'
import Venues from './components/Venues'
import Events from './components/Events'
import LoginPage from './pages/Login'

function App() {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venues" element={<Venues />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/myorders" element={<MyOrders />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </>
    )
}

export default App
