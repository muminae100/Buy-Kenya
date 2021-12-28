import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';
import '../css/WishList.css'
import { useStateValue } from "../StateProvider"

function WishList() {
    const [{ wishlistbasket }, dispatch] = useStateValue();

    return (
        <>
        <Header />
        <div className="wishlist">
            <h2>My Wishlist</h2>
            <div>
            {wishlistbasket.map(item => (
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
        <Footer />
        </>
    )
}

export default WishList
