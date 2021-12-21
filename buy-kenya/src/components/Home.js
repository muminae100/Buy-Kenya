import React from 'react'
import Product from './Product'
import '../css/Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__section">

                <div className="collections__container">
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                    <div className="collections__item">
                        <i className="fas fa-dumbbell"></i>
                        <span>Sports</span>
                    </div>
                </div>

                <div className="carousel">
                   <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/s1_8b968f52-493e-4178-953b-dfb1597857fb.jpg?v=1638362212"
                    alt="" />
                </div>

                <div className="offers__container">
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b1.png?v=1620209222" alt="" />
                    </div>
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b2.png?v=1620209240" alt="" />
                    </div>
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b3.png?v=1620209254" alt="" />
                    </div>
                    <div className="offer__item">
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b4.png?v=1620209266" alt="" />
                    </div>
                </div>

                </div>
                <div className="home__sectionTwo">
                    <div className="home__sectionTwoTitle">
                        <h2>Shop by Categories</h2>
                    </div>

                    <div className="home__row">
                        <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                    </div>

                </div>

                <div className="home__sectionThree">
                    <div className="home__sectionThreeTitle">
                        <h2>HOT DEALS</h2>
                    </div>

                    <div className="home__row">
                    <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                    </div>

                </div>
                <div className="home__sectionFour">
                    <div className="home__sectionFourTitle">
                        <h2>Featured Products</h2>
                    </div>

                    <div className="home__row">
                    <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                    </div>

                </div>
                <div className="home__sectionFive">
                    <div className="home__sectionFiveTitle">
                        <h2>Recommended For You</h2>
                    </div>

                    <div className="home__row">
                    <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                    </div>
                    <div className="home__row">
                    <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                     <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                         <Product title='Mac Book'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                    </div>

                </div>
                <div className="home__sectionSix">
                    <div className="home__sectionSixTitle">
                        <h2>Featured Brands</h2>
                    </div>

                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                </div>
                <div className="home__sectionSeven">
                    <div className="home__sectionSevenTitle">
                        <h2>Electronics & Offices</h2>
                    </div>

                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                </div>
                <div className="home__sectionEight">
                    <div className="home__sectionEightTitle">
                        <h2>Clothing & Accessories</h2>
                    </div>

                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                </div>
                <div className="home__sectionNine">
                    <div className="home__sectionNineTitle">
                        <h2>Home, Furnitures & Decor</h2>
                    </div>

                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
