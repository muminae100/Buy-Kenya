import React from 'react'
import { useStateValue } from "../StateProvider";
import '../css/Cart.css';

function WishListItem({id, title, image1, price, colors}) {
    const [{ basket, wishlistbasket }, dispatch] = useStateValue();
    const removeFromWishList = () =>{
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: id,
            },
        });
    
    };
    return (
                        <div className="item">
                        <div className="buttons">
                          <span onClick={removeFromWishList} className="delete-btn">
                              &times;
                          </span>
                        
                        </div>
                    
                        <div className="image">
                          <img src={image1} alt="" />
                        </div>
                    
                        <div className="description">
                          {title}
                        </div>
                    
                        <div className="total-price">$ {price}</div>
                      </div>      
    )
}

export default WishListItem
