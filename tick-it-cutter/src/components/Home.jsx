import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home () {

  return(
    <div className='heroPage'>
      <Navbar />
      <h1 className='welcomeTitle'>Tick-iT Cutter</h1>
      <Features />
    </div> 
  )
  
}