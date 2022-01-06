import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../StateProvider"
import { getBasketTotal } from '../reducer'
import { useNavigate } from "react-router-dom"

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <h2 style={{"borderBottom":"2px solid #131921","padding":"10px"}}>Order Summary</h2>
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <div className="subtotal__itemsCount">
                    <p>Items</p>
                    <p>{basket.length} item(s):</p>
                </div>
             
                <div className="subtotal__total">
                    <p>Total</p>
                    <p><strong>{`${value}`}</strong></p>
                </div>
                </>
            ) }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={e => navigate('/checkout')} className="subtotal__button1">Proceed to Checkout</button>
            <button className="subtotal__button2">Continue shopping</button>
        </div>
    )
}

export default Subtotal
