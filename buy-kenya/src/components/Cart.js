import React from 'react'
import Header from './Header'
import '../css/Cart.css'

function Cart() {
    return (
        <>
        <Header />
        <div className="cart">
            <div className="cart__left">

                <img className="cart__ad" 
                src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-home-2_1920x.png?v=1620189483" alt="" />
                <div>
                    <h2 className="cart__title">
                        My Cart
                    </h2>
                    <h2>Cart item component</h2>
                </div>

            </div>

            <div className="cart__right">
                <h2>Subtotal component</h2>
            </div>

        </div>
        </>
    )
}

export default Cart
