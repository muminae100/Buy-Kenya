import React from 'react'
import '../css/Cart_item.css'
import { useStateValue } from "../StateProvider"

function Cart_item({id, title, image, price,rating, colors}) {
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
        <div className="cart__item">
            <div className="cart__itemImage">
            <img style={{"width":"150px","height":"150px"}} src={image} alt="" />
            <div className="cart__itemColors">
                <div className="cart__itemColor" style={{"backgroundColor":"black"}}></div>
                <div className="cart__itemColor" style={{"backgroundColor":"red"}}></div>
                <div className="cart__itemColor" style={{"backgroundColor":"sandybrown"}}></div>
                <div className="cart__itemColor" style={{"backgroundColor":"slategray"}}></div>
            </div>
            </div>
            <div className="cart__itemTitle">
                <p>Title</p>
                <p>{title}</p>
            </div>
            <div className="cart__itemPrice">
                <div>Price</div>
                <div>
                <small>$</small>
                <strong>{price}</strong>
                </div>
            </div>
            <div className="cart__itemQuantity">
                <p>Quantity</p>
                <p>1</p>
            </div>
            <div className="cart__itemTotal">
                <p>Total</p>
                <div>
                <small>$</small>
                <strong>{price}</strong>
                </div>
            </div>
            <div className="cart__itemButtonContainer">
                <button onClick={removeFromBasket} className="cart__itemButton">&times;</button>
            </div>
        </div>
    )
}

export default Cart_item
