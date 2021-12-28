import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Product from './Product';
import '../css/WishList.css'
import { useStateValue } from "../StateProvider"

function WishList() {
    const [{ wishlistbasket }, dispatch] = useStateValue();

    return (
        <>
        <Header />
        <div className="wishlist">
            <h2>My Wishlist</h2>
            <div className="wishlist__items">
            {wishlistbasket.map(item => (
                <Product 
                id = {item.id}
                title={item.title}
                image1={item.image1}
                image2={item.image2}
                price={item.price}
                rating={item.rating}
                colors={item.colors}
                removeWish
                />
            ))}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default WishList
