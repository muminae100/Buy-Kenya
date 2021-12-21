import React from 'react'
import '../css/Product.css'

function Product({id, title, image, price, colors, rating}) {
    return (
    <div className="product">
    <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_, i) =>(
                <p><i style={{"color":"yellow"}} class="fas fa-star"></i></p>
            )) }
        </div>
    </div>
    <img src={image} 
    alt="" />
    <div className="product__colors">
        <div className="product__color" style={{"backgroundColor":"black"}}></div>
        <div className="product__color" style={{"backgroundColor":"red"}}></div>
        <div className="product__color" style={{"backgroundColor":"sandybrown"}}></div>
        <div className="product__color" style={{"backgroundColor":"slategray"}}></div>
    </div>
    <div className="product__bottom">
        <button className="product__button">Add to cart</button>
        <span><i style={{"color":"crimson"}} className="fa fa-heart"></i></span>
    </div>
    </div>
    )
}

export default Product
