import React, { useState } from "react"
import '../App.css'
import TicketImg from '../assets/TicketImg.png'
import { faTrashCan, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckoutAlert from "./CheckoutAlert"

const CheckoutForm = () => {
  const [quantity, setQuantity] = useState(1)
  const [showModal, setShowModal] = useState(false);

  
  
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

  return (
    <div className="">
      <div className="checkoutTitle">
        <h1>Checkout</h1>
      </div>

      <div>
        <div className="checkoutCard">
          <img className='ticket-img' src={TicketImg} width={100}/>
          <div className="ticket-detail"> 
            <h3>Jay-Z</h3>
            <p>Venue: Fox Theater</p>
          </div>
          <div className="quantityContainer">
            <button className='btn-minus' onClick={handleSubtractQuantity}><FontAwesomeIcon icon={faCircleMinus} /></button>
            <input type="text" value={quantity} onChange={handleOnChange} />
            <button className='btn-plus' onClick={handleAddQuantity}><FontAwesomeIcon icon={faCirclePlus} /></button>
          </div>
          <div className="deleteIcon">
            <button><FontAwesomeIcon icon={faTrashCan} /></button>  
          </div>
        </div>
      </div>

      <div className="orderSummery">
        <p>Total: $130</p>
        <hr />
        <CheckoutAlert show={showModal} handleClose={handleClose} />
      </div>
    </div>
  )
}

export default CheckoutForm