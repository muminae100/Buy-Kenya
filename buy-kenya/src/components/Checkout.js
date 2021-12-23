import React, { useState, useEffect } from 'react'
import Header from './Header'
import Cart_item from './Cart_item'
import '../css/Checkout.css'
import { useStateValue } from "../StateProvider"
import { Link, Navigate } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from '../reducer'
import CurrencyFormat from 'react-currency-format'
import axios from '../axios'
import { async } from '@firebase/util'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = Navigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] =useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,  {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate.replace('/orders')
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <>
        <Header />
        <div className="checkout">
            <div className="checkout__container">
                <h1>
                    Checkout (<Link to="/cart">{basket?.length} items</Link>)
                </h1>
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className="checkout__address">
                        <p>{ user?.email }</p>
                        <p>123 The Hub</p>
                        <p>Karen Town, Nairobi</p>
                    </div>
                </div>
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>
                            Review items & delivery
                        </h3>
                    </div>
                    <div className="checkout__items">
                        {basket.map(item => (
                            <Cart_item 
                            id = {item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            colors={item.colors}
                            />
                        ))}
                    </div>
                </div>
                <br />
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>
                            Payment method
                        </h3>
                    </div>
                    <div className="checkout__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <div className="payment__priceContainer">
                        <CurrencyFormat
                        renderText={(value) =>(
                            <div className="subtotal__total">
                                <h3>Total</h3>
                                <p><strong>{`${value}`}</strong></p>
                            </div>
                        ) }
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>

                        {error && <div>{error}</div>}
                        </div>
                        
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout
