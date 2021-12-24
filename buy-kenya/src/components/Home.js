import React, { useEffect, useState } from 'react'
import Header from './Header'
import Product from './Product'
import '../css/Home.css'
import Carousel from 'react-elastic-carousel';

function Home() {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`12/31/${year}`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
      });
      const timerComponents = [];
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
      
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });     

    //   const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    //     { width: 850, itemsToShow: 3 },
    //     { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    //     { width: 1450, itemsToShow: 5 },
    //     { width: 1750, itemsToShow: 6 }
    //   ];

    return (
        <>
        <Header />
        <div className="home">
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

                <div>            
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

                    <div className="home__rowTwo">
                    <Carousel itemsToShow={6}>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-1_1024x1024_crop_center.png?v=1620208565" alt="" />
                            <p>Televisions</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-2_1024x1024_crop_center.png?v=1620208579" alt="" />
                            <p>Televisions</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-3_1024x1024_crop_center.png?v=1620209409" alt="" />
                            <p>Televisions</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-4_1024x1024_crop_center.png?v=1620209418" alt="" />
                            <p>Televisions</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-5_1024x1024_crop_center.png?v=1620209431" alt="" />
                            <p>Televisions</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            <p>Televisions</p>
                        </div>
                    </Carousel>
                       
                    </div>

                </div>

                <div className="home__sectionThree">
                    <div style={{"padding":"20px"}} className="home__sectionTitleThree">
                        <i style={{"color":"#e10600","fontWeight":"700","fontSize":"20px"}} className="fas fa-fire"></i>
                        <h2 className="hot__deals">HOT DEALS</h2>
                        <div style={{"marginLeft":"20px","fontWeight":"700"}}>
                        {timerComponents.length ? timerComponents : <span style={{"color":"red"}}>Time's up!</span>}
                        </div>
                    </div>

                    <div className="home__rowThree">
                        <Carousel itemsToShow={4}>
                        <div id='item1' className="card">
                            Item
                        </div>
                        <div id='item2' className="card">
                            Item
                        </div >
                        <div id='item3' className="card">
                            Item
                        </div>
                        <div id='item4' className="card">
                            Item
                        </div>
                        <div id='item5' className="card">
                            Item
                        </div>
                        <div id='item6' className="card">
                            Item
                        </div>
                        </Carousel>
                        
                    </div>

                </div>
                <div>
                    <div>
                        <h2>Featured Products</h2>
                    </div>

                    <div className="home__rowThree">
                    <Carousel itemsToShow={4}>
                        <div id='item1' className="card">
                            Item
                        </div>
                        <div id='item2' className="card">
                            Item
                        </div >
                        <div id='item3' className="card">
                            Item
                        </div>
                        <div id='item4' className="card">
                            Item
                        </div>
                        <div id='item5' className="card">
                            Item
                        </div>
                        <div id='item6' className="card">
                            Item
                        </div>
                        </Carousel>
                    </div>

                </div>
                <div className="home__sectionFive">
                    <div className="home__sectionTitle">
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
                    <div className="home__sectionTitle">
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
                    <div className="home__sectionTitle">
                        <h2>Electronics & Offices</h2>
                    </div>

                    <div className="home__row">
                    <div className="card">
                    <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{"width":"100%"}} />
                    <h1>Tailored Jeans</h1>
                    <p className="price">$19.99</p>
                    <p>Some text about the jeans..</p>
                    <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                    <img src="https://www.w3schools.com/w3images/jeans3.jpg" alt="Denim Jeans" style={{"width":"100%"}} />
                    <h1>Tailored Jeans</h1>
                    <p className="price">$19.99</p>
                    <p>Some text about the jeans..</p>
                    <p><button>Add to Cart</button></p>
                    </div>
                    </div>

                </div>
                <div className="home__sectionEight">
                    <div className="home__sectionTitle">
                        <h2>Clothing & Accessories</h2>
                    </div>
                    <div>
                    <div className="coupon">
                    <div className="coupon__container">
                        <h3>Company Logo</h3>
                    </div>
                    <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt="Avatar" style={{"width":"100%"}} />
                    <div className="container" style={{"backgroundColor":"white"}}>
                        <h2><b>20% OFF YOUR PURCHASE</b></h2>
                        <p>Lorem ipsum..</p>
                    </div>
                    <div className="container">
                        <p>Use Promo Code: <span className="promo">BOH232</span></p>
                        <p className="expire">Expires: Jan 03, 2021</p>
                    </div>
                    </div>
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
                    <div className="home__sectionTitle">
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
        </>
    )
}

export default Home
