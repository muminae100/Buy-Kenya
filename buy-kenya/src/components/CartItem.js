import React from 'react'
import '../css/Cart_item.css'
import { useStateValue } from "../StateProvider"

function CartItem({id, title, image, price,rating, colors, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                item: {
                    id: id,
                },
            });
        
    }

    return (
        <>
        <div className="cart__item">
            <div className="cart__itemImage">
            <img style={{"width":"100px","height":"100px"}} src={image} alt="" />
            </div>
            <div className="cart__itemTitle">
                <span>{title}</span>
            </div>
            <div className="cart__itemPrice">
                <div>
                <small>$</small>
                <strong>{price}</strong>
                </div>
            </div>
            <div className="cart__itemButtonContainer">
                {!hideButton && (
                    <button onClick={removeFromBasket} className="cart__itemButton">&times;</button>
                )}
                
            </div>
        </div>
        </>
    )
}

export default CartItem
