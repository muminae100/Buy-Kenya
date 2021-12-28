import React from 'react'
import '../css/Cart_item.css'
import { useStateValue } from "../StateProvider"

function CartItem({id, title, image1,image2, price, rating, colors, hideButton}) {
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
            <div className="cart__itemImages figure">
                <img className="Sirv image-main" src="https://demo.sirv.com/hc/Bose-700-b.jpg?scale.option=fill&w=300&h=0?w=10&colorize.color=efefef" data-src="https://demo.sirv.com/hc/Bose-700-a.jpg?scale.option=fill&w=300&h=0" />
                <img className="Sirv image-hover" data-src="https://demo.sirv.com/hc/Bose-700-b.jpg?scale.option=fill&w=300&h=0" />
            </div>
            <div className="cartItem__info">
            <div className="cart__itemTitle">
                <span className="s1">Product: </span>
                <span>{title}</span>
            </div>
            <br />
            <div>
               <span className="s1">Price: </span>
                <div className="cart__itemPrice">
                <small>$</small>
                <strong>{price}</strong>
                </div>
            </div>
            <br />
            <div className="cart__itemButtonContainer">
                {!hideButton && (
                    <button onClick={removeFromBasket} className="cart__itemButton"><i className="fa fa-trash"></i> Remove</button>
                )}
                
            </div>
            </div>
            
        </div>
        </>
    )
}

export default CartItem
