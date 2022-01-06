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
                    <div className="cart__items">
                    <div className="shopping-cart">
        
                    {basket?.length >= 1 &&(
                      <>
                        <div className="products__labels">
                        <p></p>
                        <h3>Product</h3>
                        <h3>Title</h3>
                        <h3>Quantity</h3>
                        <h3>Price</h3>
                      </div>
                      {basket.map(item => (
                        <CartItem 
                        id = {item.id}
                        title={item.title}
                        image1={item.image1}
                        image2={item.image2}
                        price={item.price}
                        rating={item.rating}
                        colors={item.colors}
                        />
                    ))}
                      
                    </>
                    )}
                    
                  </div>

                  </div>

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
