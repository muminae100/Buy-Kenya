import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Subtotal from './Subtotal';
import '../css/Cart.css';
import CartItem from './CartItem';
import { useStateValue } from "../StateProvider";

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
                    <div className="no__items">
                        {basket?.length === 0 &&(
                            <>
                            <div><i className="fa fa-shopping-cart"></i></div>
                            <p style={{"fontSize":"25px"}}>Your cart is empty!</p>
                            </>
                        )}
                    </div>
                    {basket.map(item => (
                        <CartItem 
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
        <Footer />
        </>
    )
}

export default Cart
