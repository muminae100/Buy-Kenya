import React from 'react'
import '../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../StateProvider"
import { getBasketTotal } from '../reducer'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            <h2>Order Summary</h2>
            <hr />
            <CurrencyFormat
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal__gift">
                    <img style={{"width":"100px","height":"100px"}} 
                    src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/gift.jpg?v=1618299025"
                    alt="" />
                    <span>This order contains a gift</span>
                </small>
                </>
            ) }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button className="subtotal__button">Proceed to Checkout</button>
            <button className="subtotal__button">Continue shopping</button>
        </div>
    )
}

export default Subtotal
