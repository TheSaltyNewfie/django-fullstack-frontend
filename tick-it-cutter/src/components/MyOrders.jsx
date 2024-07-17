import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import CreditCardForm from '../components/CreditCard'
import CheckoutForm from '../components/CheckoutForm'
import Navbar from '../components/Navbar'
import '../App.css'

export default function MyOrders() {
    return (
      <div>
        <Navbar />
        <div className="ordersContainer">
          <div className="credit Container">
          <CreditCardForm />
        </div>
        <div className="checkoutContainer">
          <CheckoutForm />
        </div> 
        </div>
        
      </div>
    )
  }
