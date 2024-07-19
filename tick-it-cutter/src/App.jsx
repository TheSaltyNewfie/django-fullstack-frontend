import { useEffect, useState } from 'react'
import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MyOrders from './components/MyOrders'
import Venues from './components/Venues'
import Events from './components/Events'
import LoginPage from './pages/Login'
import ArtistPage from './pages/Artists'

function App() {

    useEffect(() => {
        let cart = localStorage.getItem("cart")

        if(cart == undefined) {
            localStorage.setItem("cart", JSON.stringify([]))
            console.log("created cart in users localStorage")
        }

    }, [])

    return (
        <>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/venues" element={<Venues />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/myorders" element={<MyOrders />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/artists" element={<ArtistPage />} />
                </Routes>
            </div>
        </>
    )
}

export default App
