import React, { useState } from "react"
import '../App.css'

const CheckoutForm = () => {
  
  return (
    <div className="">
      <div className="checkoutTitle">
        <h1>Check Out</h1>
      </div>

      <form className="loginContainer">
        {/* UserName */}
        <div className="emailContainer">
        <input type="text" id="username" placeholder="Email"/>
        </div>

        {/* Password */}
        <div className="passwordContainer">
          <input type="password" id="password" placeholder=""/>
        </div>

        {/* Submit Button */}
        <div className="submitBtnContainer">
          <button className="submitBtn" type="submit">Log in</button>
        </div>
        
      
      </form>
    </div>
  )
}

export default CheckoutForm