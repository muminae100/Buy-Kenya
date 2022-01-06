import React from 'react';
import { useStateValue } from "../StateProvider";


function CartItem({id, title, image1, price, colors}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            },
        });
    
    };
    return (
                       <div className="item">
                        <div className="buttons">
                          <span onClick={removeFromBasket} className="delete-btn">
                              &times;
                          </span>
                        
                        </div>
                    
                        <div className="image">
                          <img src={image1} alt="" />
                        </div>
                    
                        <div className="description">
                          {title}
                        </div>
                    
                        <div className="quantity">
                          <button className="plus-btn" type="button" name="button">
                          <i class="fas fa-plus"></i>
                          </button>
                          <input type="text" name="name" value="1" />
                          <button className="minus-btn" type="button" name="button">
                          <i class="fas fa-minus"></i>
                          </button>
                        </div>
                    
                        <div className="total-price">$ {price}</div>
                      </div>
    )
}

export default CartItem
