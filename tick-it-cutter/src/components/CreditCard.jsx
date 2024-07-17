import React, { useState } from "react"
import Cards from "react-credit-cards-2"
import "react-credit-cards-2/dist/es/styles-compiled.css"

const CreditCardForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }))
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }))
  };

  return (
    <div className="credit-card">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <div className="mt-3">
        <form>
          <div className="mb-3">
            <input
              type="text"
              name="number"
              className="form-control"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="text"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru (MM/YY)"
                pattern="\d{2}/\d{2}"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="col-6 mb-3">
              <input
                type="text"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
          </div>

          <div className="d-grid">
            <button className="btn btn-success">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreditCardForm;
