import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Features from './Features'
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