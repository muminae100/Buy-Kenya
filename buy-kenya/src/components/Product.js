import React, { useState } from 'react';
import '../css/Product.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";

function Product({id, title, image1,image2, price, rating}) {
    const [{ basket, wishlistbasket }, dispatch] = useStateValue();
    const [isClicked, setIsClicked] = useState(false);
    const [addWish, setWishBtn] = useState(false)

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
        setIsClicked(true);
    };

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            },
        });
        setIsClicked(false) ;
    
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
        setWishBtn(!addWish);
    };
    const removeFromWishList = () =>{
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: id,
            },
        });
        setWishBtn(!addWish);
    
    };


    return (
    <div className="product">

    {/* <div className="product__label">Out of stock</div>  */}
    <Link to={`/product/${title}`}>
    <div className="product__image figure">
        <img className="Sirv image-main" src={image1 + '?w=10&colorize.color=efefef'} data-src={image1} alt="" />
        <img className="Sirv image-hover" data-src={image2} alt="" />
    </div>
    </Link>

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
        
    {addWish?(
        <button style={{"border":"none","padding":"5px","backgroundColor":"white"}} onClick={removeFromWishList}>
        <i style={{"fontSize":"24px","color":"red"}} className="fa fa-heart"></i>
        </button>
    ): (
        <button style={{"border":"none","padding":"5px","backgroundColor":"white"}} onClick={addToWishList}>
            <i style={{"fontSize":"24px","color":"gray"}} className="far fa-heart"></i>
        </button>
    )}
    <span style={{"padding":"5px"}}>
        <i style={{"fontSize":"24px","color":"gray"}} className="fas fa-share-alt"></i>
    </span>

    </div>
        {isClicked?(
            <button onClick={removeFromBasket} className="product__button">
                Remove
            </button>)
        :(
            <button onClick={addToBasket} className="product__button">
                Add to cart
            </button>
        )}

    </div>

    )
}

export default Product
