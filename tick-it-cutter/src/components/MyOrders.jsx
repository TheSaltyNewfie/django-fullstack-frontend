import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import CreditCardForm from '../components/CreditCard'
import Navbar from '../components/Navbar'

export default function MyOrders() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <CreditCardForm />
        </div>
      </div>
      
    );
  }
