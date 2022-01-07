import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import '../css/Home.css';
import Carousel from 'react-elastic-carousel';
import { useStateValue } from "../StateProvider";
import Data from '../data.json';

function Home() {
    const [{ basket, wishlistbasket }, dispatch] = useStateValue();

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


        let hotdeals = Data.filter(item =>{
            return item.hotdeal === true;
        });
        let featured = Data.filter(item =>{
            return item.featured === true;
        });
        let recommended = Data.filter(item =>{
            return item.recommended === true;
        });
        let electronics = Data.filter(item =>{
            return item.collection === "electronics";
        });
        let fashion = Data.filter(item =>{
            return item.collection === "fashion";
        });
        


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
                    <Link to="collection/fashion">
                    <div className="collections__item">
                        <i class="fas fa-tshirt"></i>
                        <p>Fashion</p>
                    </div>
                    </Link>
                    <Link to="category/phones">
                    <div className="collections__item">
                        <i class="fas fa-mobile-alt"></i>
                        <p>Phones</p>
                    </div>
                    </Link>
                    <Link to="category/gaming">
                    <div className="collections__item">
                        <i class="fas fa-gamepad"></i>
                        <p>Gaming</p>
                    </div>
                    </Link>
                    <Link to="category/laptops">
                    <div className="collections__item">
                        <i class="fas fa-laptop"></i>
                        <p>Computing</p>
                    </div>
                    </Link>
                    <Link to="category/televisions">
                    <div className="collections__item">
                        <i class="fas fa-tv"></i>
                        <p>Tvs</p>
                    </div>
                    </Link>
                    <Link to="collection/consumables">
                    <div className="collections__item">
                        <i class="fas fa-wine-bottle"></i>
                        <p>Consumables</p>
                    </div>
                    </Link>
                    <Link to="collection/electronics">
                    <div className="collections__item">
                        <i class="fas fa-tv"></i>
                        <p>Electronics</p>
                    </div>
                    </Link>
                    <Link to="category/office">
                    <div className="collections__item">
                        <i class="fas fa-pen"></i>
                        <p>Office</p>
                    </div>
                    </Link>
                    <Link to="category/accessories">
                    <div className="collections__item">
                        <i class="fas fa-headphones"></i>
                        <p>Accessories</p>
                    </div>
                    </Link>
                    <Link to="/category/beauty">
                    <div className="collections__item">
                        <i class="fas fa-spray-can"></i>
                        <p>Beauty</p>
                    </div>
                    </Link>
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
                            <Link to="category/phones">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-1_1024x1024_crop_center.png?v=1620208565" alt="" />
                            </Link>
                            <p>Mobile Phones & Tablets</p>
                        </div>
                       
                        <div className="home__categoryImageBox">
                            <Link to="category/laptops">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-2_1024x1024_crop_center.png?v=1620208579" alt="" />
                            </Link>
                            <p>Laptops</p>
                        </div>
                        <div className="home__categoryImageBox">
                           <Link to="category/televisions">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-3_1024x1024_crop_center.png?v=1620209409" alt="" />
                            </Link>
                            <p>Televisions</p>
                        </div>
                        
                        
                        <div className="home__categoryImageBox">
                        <Link to="category/office">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-4_1024x1024_crop_center.png?v=1620209418" alt="" />
                        </Link>
                            <p>PCs</p>
                        </div>
                     
                        <div className="home__categoryImageBox">
                            <Link to="category/subwoofers">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-5_1024x1024_crop_center.png?v=1620209431" alt="" />
                            </Link>
                            <p>Audio & Video</p>
                        </div>
                        
                        <div className="home__categoryImageBox">
                            <Link to="category/gaming">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-category-6_1024x1024_crop_center.png?v=1620209467" alt="" />
                            </Link>
                            <p>Gaming</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <Link to="category/home_appliances">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-fridge_1024x1024_crop_center.jpg?v=1616410888" alt="" />
                            </Link>
                            <p>Home Appliances</p>
                        </div>
                        
                        <div className="home__categoryImageBox">
                        <Link to="collection/accessories">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-headphone_1024x1024_crop_center.jpg?v=1616410951" alt="" />
                        </Link>
                            <p>Accessories</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <Link to="collection/consumables">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-kettle_1024x1024_crop_center.jpg?v=1616410925" alt="" />
                            <p>Consumables</p>
                            </Link>
                        </div>

                    </Carousel>
                       
                    </div>

                </div>

                <div className="home__sectionThree">
                    <div style={{"padding":"20px","marginLeft":"15px"}} className="home__sectionTitleThree">
                        <i style={{"color":"#e10600","fontWeight":"700","fontSize":"20px"}} className="fas fa-fire"></i>
                        <h1 className="hot__deals">HOT DEALS</h1>
                        <div style={{"marginLeft":"20px","fontWeight":"700"}}>
                        {timerComponents.length ? timerComponents : <span style={{"color":"red"}}>Time's up!</span>}
                        </div>
                    </div>

                    <div className="home__rowThree">
                        <Carousel itemsToShow={5}>
                        {hotdeals.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}

                        </Carousel>
                        
                    </div>

                </div>
                <div>
                    <div>
                        <h2>Featured Products</h2>
                    </div>

                    <div className="home__rowThree">
                    <Carousel itemsToShow={5}>
                    {featured.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}
                    </Carousel>
                    </div>

                </div>
                <div className="home__sectionFive">
                    <div className="home__sectionTitle">
                        <h2>Recommended For You</h2>
                    </div>

                    <div className="home__row">
                    <Carousel itemsToShow={5}>

                        {recommended.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}
                    </Carousel>
                    </div>

                </div>
                <div style={{"marginTop":"50px"}} className="home__sectionSix">
                    <div className="home__sectionTitle">
                        <h2>Featured Brands</h2>
                    </div>

                    <div className="home__brands">
                        <Carousel itemsToShow={7}>

                        <div>
                            <Link to="brand/apple">
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Layer-1.png" alt="" />
                            </Link>
                        </div>

                        <div>
                            <Link to="/brand/sony">
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Sony.png" alt="" />
                            </Link>
                        </div>

                        <div>
                            <Link to="brand/samsung">
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Samsung.png" alt="" />
                            </Link>
                        </div>

                        <div>
                            <Link to="/brand/infinix">
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Infinix.png" alt="" />
                            </Link>
                        </div>

                        <div>
                            <Link to="/brand/oppo">
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Oppo.png" alt="" />
                            </Link>
                        </div>

                        <div>
                            <Link to="/brand/vivo">
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Vivo.png" alt="" />
                            </Link>
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

                        <Product
                        id={electronics[0].id}
                        title={electronics[0].title}
                        price={electronics[0].price} 
                        image1={electronics[0].image1}
                        image2={electronics[0].image2}
                        rating={electronics[0].rating} 
                        />

                       <Product
                        id={electronics[1].id}
                        title={electronics[1].title}
                        price={electronics[1].price} 
                        image1={electronics[1].image1}
                        image2={electronics[1].image2}
                        rating={electronics[1].rating} 
                        />

                        <Product
                        id={electronics[2].id}
                        title={electronics[2].title}
                        price={electronics[2].price} 
                        image1={electronics[2].image1}
                        image2={electronics[2].image2}
                        rating={electronics[2].rating} 
                        />

                        </div>
                        <div className="col3">
                           
                            <div className="col3__section">
                                <div>
                                <h3>SMARTPHONES</h3>
                                <Link to="category/phones">
                                <p>Shop now</p>
                                </Link>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-1_188abd45-7e7a-4d39-8228-c987076c576b_200x.jpg?v=1620376694" alt="" />
                            </div>
                            
                            <div className="col3__section">
                                <div>
                                <h3>LAPTOPS</h3>
                                <Link to="category/laptops">
                                <p>Shop now</p>
                                </Link>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-2_5f2ffb60-181b-4f3c-911b-8780b0b974bb_200x.jpg?v=1620376719" alt="" />
                            </div>
                            
                            
                            <div className="col3__section">
                                <div>
                                <h3>TELEVISIONS</h3>
                                <Link to="category/televisions">
                                <p>Shop now</p>
                                </Link>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Untitled-3_93499d2a-e739-4f18-b48a-fbd10baad6df_200x.jpg?v=1620376733" alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                    <Carousel itemsToShow={5}>

                        {electronics.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}

                    </Carousel>
                    </div>
                    <div className="electronics__bottom">
                        <div>
                            <Link to="category/accessories">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/5_6eb67a50-2f8f-4981-8fcf-a35335f6df27_1024x1024_crop_center.jpg?v=1620376793" alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to="category/accessories">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/6_91657c30-af99-4b66-a8b2-919324bc42f6_1024x1024_crop_center.jpg?v=1620376807" alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to="category/televisions">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/7_68c7303b-736e-4e7f-a7b0-286b9cf790b0_1024x1024_crop_center.jpg?v=1620376820" alt="" />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="home__sectionEight">
                    <div className="home__sectionTitle">
                        <h2>Clothing & Accessories</h2>
                    </div>

                    
                    <div className="home__electronics">
                        <div className="col1">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/16_970x.jpg?v=1620375410" alt="" />
                        </div>
                        <div className="col2">
                        
                        
                        <Product
                        id={fashion[0].id}
                        title={fashion[0].title}
                        price={fashion[0].price} 
                        image1={fashion[0].image1}
                        image2={fashion[0].image2}
                        rating={fashion[0].rating} 
                        />

                       <Product
                        id={fashion[1].id}
                        title={fashion[1].title}
                        price={fashion[1].price} 
                        image1={fashion[1].image1}
                        image2={fashion[1].image2}
                        rating={fashion[1].rating} 
                        />

                        <Product
                        id={fashion[2].id}
                        title={fashion[2].title}
                        price={fashion[2].price} 
                        image1={fashion[2].image1}
                        image2={fashion[2].image2}
                        rating={fashion[2].rating} 
                        />


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
                    <Carousel itemsToShow={5}>

                        {fashion.map((item, index) =>(
                            <Product 
                            id={item.id}
                            title={item.title}
                            price={item.price} 
                            image1={item.image1}
                            rating={item.rating} 
                            image2={item.image2}
                            />
                        ))}

                    </Carousel>
                    </div>
                    <div className="electronics__bottom">
                        <div>
                            <Link to="category/men_collection">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/11_f68ad293-b6fb-4bfa-86ed-a9d117d94cee_1024x1024_crop_center.jpg?v=1620375877" alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to="category/women_collection">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/12_e9fa6ca1-68c4-44f6-8ffe-c721eba30260_1024x1024_crop_center.jpg?v=1620375891" alt="" />
                            </Link>
                        </div>
                        <div>
                            <Link to="category/children_collection">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/13_5d5eea5f-3c29-4a57-90af-8a85aad0598c_1024x1024_crop_center.jpg?v=1620375903" alt="" />
                            </Link>
                        </div>
                    </div>

                </div>
            <Footer />
        </div>
        </>
    )
}

export default Home
