import React from 'react'
import '../css/Product.css'
import { useStateValue } from "../StateProvider"

function Product({id, title, image, price, colors, rating}) {
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

    {/* <div className="product__label">Out of stock</div>  */}

    <div className="product__image figure">
        <img className="Sirv image-main" src="https://demo.sirv.com/hc/Bose-700-a.jpg?w=10&colorize.color=efefef" data-src="https://demo.sirv.com/hc/Bose-700-a.jpg" />
        <img className="Sirv image-hover" data-src="https://demo.sirv.com/hc/Bose-700-b.jpg" />
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
    {/* <div className="product__color"><i style="font-size: 24px;color: gray" className="fa fa-heart"></i></div>  */}
    </div>

    <button onClick={{addToBasket}} className="product__button">Add to cart</button>

    </div>

    )
}

export default Product
