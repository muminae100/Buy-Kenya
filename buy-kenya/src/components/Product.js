import React from 'react'
import '../css/Product.css'
import { useStateValue } from "../StateProvider"

function Product({id, title, image1,image2, price, colors, rating ,removeWish}) {
    const [{ basket, wishlistbasket }, dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image1: image1,
                image2: image2,
                price: price,
                rating: rating,
            },
        });
    };

    const addToWishList = () =>{
        dispatch({
            type: 'ADD_TO_WISHLIST',
            item: {
                id: id,
                title: title,
                image1: image1,
                image2: image2,
                price: price,
                rating: rating,
            },
        });
    };
    const removeFromWishList = () =>{
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: id,
            },
        });
    
    };


    return (
    <div className="product">

    {/* <div className="product__label">Out of stock</div>  */}

    <div className="product__image figure">
        <img className="Sirv image-main" src={image1 + '?w=10&colorize.color=efefef'} data-src={image1} />
        <img className="Sirv image-hover" data-src={image2} />
    </div>

    <div className="product__rating">
    {Array(rating).fill().map((_, i) =>(
        <p><i style={{"color":"orange"}} className="fas fa-star"></i></p>
    )) }
    </div>


    <p className="product__title">{title}</p>


    <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
    </p>


    <div className="product__colors">
    <div className="product__color" style={{"background-color": "black"}}></div>
    <div className="product__color" style={{"backgroundColor": "beige"}}></div>
    <div className="product__color" style={{"background-color": "sandybrown"}}></div>
    <div className="product__color" style={{"background-color": "slategray"}}></div>
    </div>
    {removeWish?(
        <button onClick={removeFromWishList}>Remove from wish list</button>
    ): (
        <button onClick={addToWishList}>Add to wish list</button>
    )}
   

    <button onClick={addToBasket} className="product__button">Add to cart</button>

    </div>

    )
}

export default Product
