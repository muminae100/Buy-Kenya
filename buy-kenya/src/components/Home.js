import React, { useEffect, useState } from 'react'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'
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
                    
                <div style={{"width":"220px"}}>
                <div className="collections__header">
                    <h4>SHOP BY CATEGORIES</h4>
                </div>
                <div className="collections__container">
                    <div className="collections__item">
                        <i class="fas fa-volleyball-ball"></i>
                        <p>Sports</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-tshirt"></i>
                        <p>Fashion</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-seedling"></i>
                        <p>Garden</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-mobile-alt"></i>
                        <p>Phones</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-gamepad"></i>
                        <p>Gaming</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-laptop"></i>
                        <p>Computing</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-gift"></i>
                        <p>Gifts</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-wine-bottle"></i>
                        <p>Supermarket</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-tv"></i>
                        <p>Electronics</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-pen"></i>
                        <p>Office</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-chair"></i>
                        <p>Furniture</p>
                    </div>
                    <div className="collections__item">
                        <i class="fas fa-spray-can"></i>
                        <p>Beauty</p>
                    </div>
                </div>
                </div>
                <div style={{"width":"800px"}} className="slide__show">
                    <Carousel itemToShow={1}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/s3.jpg?v=1620186768" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/s1_8b968f52-493e-4178-953b-dfb1597857fb.jpg?v=1638362212" alt="" />
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/s2.jpg?v=1620186744" alt="" />
                    </div>
                    </Carousel>          
                </div>

                <div style={{"width":"400px"}} className="offers__container">
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
                        <h2>Shop by Collections</h2>
                    </div>

                    <div className="home__rowTwo">
                    <Carousel itemsToShow={6}>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-1_1024x1024_crop_center.png?v=1620208565" alt="" />
                            <p>Mobile Phones</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-2_1024x1024_crop_center.png?v=1620208579" alt="" />
                            <p>Laptops & Tablets</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-3_1024x1024_crop_center.png?v=1620209409" alt="" />
                            <p>Televisions</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-4_1024x1024_crop_center.png?v=1620209418" alt="" />
                            <p>PCs & Accessories</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-5_1024x1024_crop_center.png?v=1620209431" alt="" />
                            <p>Audio & Video</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            <p>Gaming</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            <p>Home Appliances</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            <p>Kitchen Appliances</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            <p>Cameras</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            <p>Shoes</p>
                        </div>
                    </Carousel>
                       
                    </div>

                </div>

                <div className="home__sectionThree">
                    <div style={{"padding":"20px","marginLeft":"35px"}} className="home__sectionTitleThree">
                        <i style={{"color":"#e10600","fontWeight":"700","fontSize":"20px"}} className="fas fa-fire"></i>
                        <h1 className="hot__deals">HOT DEALS</h1>
                        <div style={{"marginLeft":"20px","fontWeight":"700"}}>
                        {timerComponents.length ? timerComponents : <span style={{"color":"red"}}>Time's up!</span>}
                        </div>
                    </div>

                    <div className="home__rowThree">
                        <Carousel itemsToShow={4}>
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                            <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        </Carousel>
                        
                    </div>

                </div>
                <div>
                    <div>
                        <h2>Featured Products</h2>
                    </div>

                    <div className="home__rowThree">
                    <Carousel itemsToShow={4}>
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                            <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                    </Carousel>
                    </div>

                </div>
                <div className="home__sectionFive">
                    <div className="home__sectionTitle">
                        <h2>Recommended For You</h2>
                    </div>

                    <div className="home__row">
                    <Carousel itemsToShow={4}>
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                            <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                    </Carousel>
                    </div>

                </div>
                <div style={{"marginTop":"50px"}} className="home__sectionSix">
                    <div className="home__sectionTitle">
                        <h2>Featured Brands</h2>
                    </div>

                    <div className="home__brands">
                        <Carousel itemsToShow={5}>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-1_250x.png?v=1620276118" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-3_250x.png?v=1620276140" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-1_250x.png?v=1620276118" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-3_250x.png?v=1620276140" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-1_250x.png?v=1620276118" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-3_250x.png?v=1620276140" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-1_250x.png?v=1620276118" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/brands-custom-3_250x.png?v=1620276140" alt="" />
                        </div>
                        </Carousel>
                    </div>

                </div>
                <div className="home__sectionSeven">
                    <div className="home__sectionTitle">
                        <h2>Electronics & Offices</h2>
                    </div>

                    <div className="home__electronics">
                        <div className="col1">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/18_970x.jpg?v=1620376538" alt="" />
                        </div>
                        <div className="col2">
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        </div>
                        <div className="col3">
                            <div className="col3__section">
                                <div>
                                <h3>SMARTPHONES</h3>
                                <p>Shop now</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-1_188abd45-7e7a-4d39-8228-c987076c576b_200x.jpg?v=1620376694" alt="" />
                            </div>
                            <div className="col3__section">
                                <div>
                                <h3>LAPTOPS</h3>
                                <p>Shop now</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-2_5f2ffb60-181b-4f3c-911b-8780b0b974bb_200x.jpg?v=1620376719" alt="" />
                            </div>
                            <div className="col3__section">
                                <div>
                                <h3>TELEVISIONS</h3>
                                <p>Shop now</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-3_93499d2a-e739-4f18-b48a-fbd10baad6df_200x.jpg?v=1620376733" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                    <Carousel itemsToShow={4}>
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                            <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                    </Carousel>
                    </div>
                    <div className="electronics__bottom">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/5_6eb67a50-2f8f-4981-8fcf-a35335f6df27_1024x1024_crop_center.jpg?v=1620376793" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/6_91657c30-af99-4b66-a8b2-919324bc42f6_1024x1024_crop_center.jpg?v=1620376807" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/7_68c7303b-736e-4e7f-a7b0-286b9cf790b0_1024x1024_crop_center.jpg?v=1620376820" alt="" />
                        </div>
                    </div>

                </div>
                <div className="home__sectionEight">
                    <div className="home__sectionTitle">
                        <h2>Clothing & Accessories</h2>
                    </div>
                    {/* <div>
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
                    </div> */}

                    
                    <div className="home__electronics">
                        <div className="col1">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/16_970x.jpg?v=1620375410" alt="" />
                        </div>
                        <div className="col2">
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        </div>
                        <div className="col3">
                            <div className="col3__section">
                                <div>
                                <h3>FOR MEN</h3>
                                <p>Shop now</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-4_200x.jpg?v=1620375587" alt="" />
                            </div>
                            <div className="col3__section">
                                <div>
                                <h3>FOR WOMEN</h3>
                                <p>Shop now</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-5_200x.jpg?v=1620375600" alt="" />
                            </div>
                            <div className="col3__section">
                                <div>
                                <h3>FOR KIDS</h3>
                                <p>Shop now</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-6_200x.jpg?v=1620375624" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                    <Carousel itemsToShow={4}>
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                        rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                            <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                        <Product title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'price={1000} image="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-2_9fd4acb2-8ad0-4a73-9461-f3f76ddbe8c5_360x.jpg?v=1616831599"
                            rating={3} colors="Colors" />
                    </Carousel>
                    </div>
                    <div className="electronics__bottom">
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/11_f68ad293-b6fb-4bfa-86ed-a9d117d94cee_1024x1024_crop_center.jpg?v=1620375877" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/12_e9fa6ca1-68c4-44f6-8ffe-c721eba30260_1024x1024_crop_center.jpg?v=1620375891" alt="" />
                        </div>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/13_5d5eea5f-3c29-4a57-90af-8a85aad0598c_1024x1024_crop_center.jpg?v=1620375903" alt="" />
                        </div>
                    </div>

                </div>
                <div className="home__sectionNine">
                    <div className="home__sectionTitle">
                        <h2>Special offers</h2>
                    </div>

                    <div className="special__offers">
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/10_249b4c1e-93dc-477f-a917-745150361a57_1024x1024_crop_center.jpg?v=1620376392" alt="" />
                       </div>
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/3_4c44d61c-45ec-479b-843d-06103dbd1d2d_1024x1024_crop_center.jpg?v=1620377071" alt="" />
                       </div>
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/7_68c7303b-736e-4e7f-a7b0-286b9cf790b0_1024x1024_crop_center.jpg?v=1620376820" alt="" />
                       </div>
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/2_b298ffde-3bef-4473-867c-7a7009fe17ee_1024x1024_crop_center.jpg?v=1620377056" alt="" />
                       </div>
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/8_ee8879b6-966e-45f3-95b3-4aac17f1897e_1024x1024_crop_center.jpg?v=1620376348" alt="" />
                       </div>
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/3_4c44d61c-45ec-479b-843d-06103dbd1d2d_1024x1024_crop_center.jpg?v=1620377071" alt="" />
                       </div>
                    </div>

                </div>
                <div className="home__sectionTen">
                    <div className="shop__withUs">
                        <h2>Why shop with us?</h2>
                        <div className="home__sectionTenContent">
                            <div>
                                <div className="large__icon"><i className="fa fa-user"></i></div>
                                <div>
                                    <h3>QUALITY AND SAVING</h3>
                                </div>
                                <div>
                                    <p>Comprehensive quality control and affordable prices</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fa fa-user"></i></div>
                                <div>
                                    <h3>QUALITY AND SAVING</h3>
                                </div>
                                <div>
                                    <p>Comprehensive quality control and affordable prices</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fa fa-user"></i></div>
                                <div>
                                    <h3>QUALITY AND SAVING</h3>
                                </div>
                                <div>
                                    <p>Comprehensive quality control and affordable prices</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fa fa-user"></i></div>
                                <div>
                                    <h3>QUALITY AND SAVING</h3>
                                </div>
                                <div>
                                    <p>Comprehensive quality control and affordable prices</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fa fa-user"></i></div>
                                <div>
                                    <h3>QUALITY AND SAVING</h3>
                                </div>
                                <div>
                                    <p>Comprehensive quality control and affordable prices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__sectionEleven">                    
                <div class="wrapper">
                <form action="#" class="card-content">
                    <div class="form__container">
                    <div class="image">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p>Get the latest updates on new products and upcoming sales</p>
                    </div>
                    <div class="form-input">
                    <label for="email"></label>
                    <input type="email" placeholder="Your Email" />
                    <button class="subscribe-btn">Subscribe</button>
                    </div>
                </form>
                </div>
                </div>
            <Footer />
        </div>
        </>
    )
}

export default Home
