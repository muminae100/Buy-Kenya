import React from 'react'
import Header from './Header'
import Subtotal from './Subtotal'
import '../css/Cart.css'
import Cart_item from './Cart_item'
import { useStateValue } from "../StateProvider"

function Cart() {
    const [{ basket }, dispatch] = useStateValue();


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

            <div className="cart__right">
               <Subtotal />
            </div>

        </div>
        </>
    )
}

export default Cart
