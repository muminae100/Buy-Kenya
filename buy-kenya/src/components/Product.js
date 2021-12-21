import React from 'react'
import '../css/Product.css'

function Product() {
    return (
    <div className="product">
    <div className="product__info">
        <p className="product__title">Mac book</p>
        <p className="product__price">
            <small>$</small>
            <strong>1000</strong>
        </p>
        <div className="product__rating">
            <p><i style={{"color":"yellow"}} class="fas fa-star"></i></p>
        </div>
    </div>
    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599" 
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
