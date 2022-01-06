import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WishListItem from './WishListItem';
import '../css/WishList.css';
import '../css/Cart.css';
import { useStateValue } from "../StateProvider";

function WishList() {
    const [{ wishlistbasket }, dispatch] = useStateValue();

    return (
        <>
        <Header />
        <div className="wishlist">
            <h2>My Wishlist</h2>
            <div className="no__items">
                {wishlistbasket?.length === 0 &&(
                    <>
                    <div><i className="fa fa-heart"></i></div>
                        <p style={{"fontSize":"25px"}}>Your Wishlist is empty!</p>
                    </>
                )}
            </div>
            <div className="wishlist__items">
            {wishlistbasket?.length >= 1 &&(
                      <>
                        <div className="products__labels">
                        <p></p>
                        <h3>Product</h3>
                        <h3>Title</h3>
                        <h3>Price</h3>
                      </div>
            {wishlistbasket.map(item => (
                <WishListItem 
                id = {item.id}
                title={item.title}
                image1={item.image1}
                price={item.price}
                colors={item.colors}
                />
            ))}
            </>
            )}
                    
            </div>
        </div>
        <Footer />
        </>
    )
}

export default WishList
