import React from 'react'
import Header from './Header'
import Cart_item from './Cart_item'
import '../css/Checkout.css'
import { useStateValue } from "../StateProvider"
import { Link } from "react-router-dom"

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

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
                <div className="checkout__section">
                    <div className="checkout__title">
                        <h3>
                            Payment method
                        </h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Checkout
