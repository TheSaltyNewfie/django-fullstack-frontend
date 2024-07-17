import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import HomeCard from '../components/Card/Card'
import HomeCard2 from '../components/Card/Card2'
import HomeCard3 from '../components/Card/Card3'
import HomeCard4 from '../components/Card/Card4'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home () {

  return(
    <div className='heroPage'>
      <Navbar />
      <h1 className='welcomeTitle'>Tick-iT Cutter</h1>
    
      <Features />
      <div className='mainCard'>
        <HomeCard />
        <HomeCard2 />
        <HomeCard3 />
        <HomeCard4 />
      </div>
      
    </div> 
  )
  
}