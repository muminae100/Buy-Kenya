import React from 'react'
import '../css/Product.css'
import { useStateValue } from "../StateProvider"

function Product({id, title, image, price, colors, rating, amount}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                colors: colors,
            },
        });
    };

    return (
    <div className="product">
        <span className="product__label">{amount || "Out of stock"}</span>
        <img src={image} alt="" />
        <div className="product__rating">
            {Array(rating).fill().map((_, i) =>(
                <p><i style={{"color":"orange"}} class="fas fa-star"></i></p>
            )) }
        </div>
        <p className="product__title">{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__colors">
        <div className="product__color" style={{"backgroundColor":"black"}}></div>
        <div className="product__color" style={{"backgroundColor":"beige"}}></div>
        <div className="product__color" style={{"backgroundColor":"sandybrown"}}></div>
        <div className="product__color" style={{"backgroundColor":"slategray"}}></div>
        {/* <div className="product__color"><i style={{"fontSize":"24px","color":"gray"}} 
        className="fa fa-heart"></i></div> */}
        </div>
        <div className="product__bottom">
        <button onClick={addToBasket} className="product__button">Add to cart</button>
        </div>
    
    </div>
    
    )
}

export default Product
