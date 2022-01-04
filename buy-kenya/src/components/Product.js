import React from 'react'
import '../css/Product.css'
import { useStateValue } from "../StateProvider"

function Product({id, title, image1,image2, price, colors, rating ,removeWish, cartButton}) {
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

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            },
        });
    
    }

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
    <div style={{"width":"100%","padding":"10px 0"}}>
        
    {removeWish?(
        <button onClick={removeFromWishList}>Remove from wish list</button>
    ): (
        <button style={{"border":"none","padding":"5px","backgroundColor":"white"}} onClick={addToWishList}>
            <i style={{"fontSize":"24px","color":"gray"}} className="fa fa-heart"></i>
        </button>
    )}
    <span style={{"padding":"5px"}}>
        <i style={{"fontSize":"24px","color":"gray"}} className="fas fa-share-alt"></i>
    </span>

    </div>
    
    <button onClick={addToBasket} className="product__button">
    Add to cart
    </button>

    </div>

    )
}

export default Product
