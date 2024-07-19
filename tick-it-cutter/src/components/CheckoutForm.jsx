import React, { useState, useEffect } from "react"
import '../App.css'
import TicketImg from '../assets/TicketImg.png'
import { faTrashCan, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckoutAlert from "./CheckoutAlert"

const CheckoutForm = () => {
  const [quantity, setQuantity] = useState(1)
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0.0)
  
  const handleOnChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleSubtractQuantity = () => {
    if(quantity)
       setQuantity(quantity - 1);
  }

  const handleAddQuantity = () =>{
    if(quantity)
       setQuantity(quantity + 1);
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    const cartd = localStorage.getItem('cart')
    setCart(JSON.parse(cartd))
    console.log(cart)

    let total = 0.0
    cart.forEach(item => {
      total += item.price
    })

    setTotalPrice(total)
  }, [])

  return (
    <div className="">
      <div className="checkoutTitle">
        <h1>Checkout</h1>
      </div>

      <div>
        {cart.map((item, index) => (
          <div className="checkoutCard" key={index}>
            <img className='ticket-img' src={TicketImg} width={100}/>
            <div className="ticket-detail"> 
              <h3>{item.name}</h3>
              <p>Venue: {item.venue}</p>
            </div>
            {/* <div className="quantityContainer">
              <button className='btn-minus' onClick={handleSubtractQuantity}><FontAwesomeIcon icon={faCircleMinus} /></button>
              <input type="text" value={quantity} onChange={handleOnChange} />
              <button className='btn-plus' onClick={handleAddQuantity}><FontAwesomeIcon icon={faCirclePlus} /></button>
            </div> */}
            <div className="deleteIcon">
              <button><FontAwesomeIcon icon={faTrashCan} /></button>  
            </div>
          </div>
        ))}
      </div>

      <div className="orderSummery">
        <p>Total: {totalPrice}</p>
        <hr />
        <CheckoutAlert show={showModal} handleClose={handleClose} />
      </div>
    </div>
  )
}

export default CheckoutForm