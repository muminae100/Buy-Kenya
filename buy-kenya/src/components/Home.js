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
                        <i class="fas fa-gift"></i>
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
                        <i class="fas fa-chair"></i>
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
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Layer-1.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Huawei.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Infinix.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Samsung.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Jyf.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Xiaomi.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Oppo.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Vivo.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Sony.png" alt="" />
                        </div>

                        <div>
                            <img src="https://ke.jumia.is/cms/TNG/L3/PhonesTablets/freelinks/Thumbnails/DT/Ulefone.png" alt="" />
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
                        title='Generic Adjustable Washing Hine F Base Refrigerator Undercarriage'
                        price={112} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/448145/1.jpg?1494"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/448145/2.jpg?1494" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Armco ARF-NF301NV(DS) - 251L Refrigerator With Inverter Compressor'
                        price={537} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/662454/1.jpg?5384"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/662454/1.jpg?5384" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Haier HP70J20AL-V2-Digital Glass Microwave Oven-20 Liters-Black'
                        price={83} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/557392/1.jpg?4417"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/557392/1.jpg?4417" 
                        rating={3} 
                        colors="Colors" />

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
                    <Carousel itemsToShow={5}>

                        <Product 
                        title='DELL Desktop Optiplex 7010 Intel Core I5 3.40GHz 4GB 500GB HDD Win 10- Certified Refurbished'
                        price={169} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/052765/2.jpg?8290"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/052765/4.jpg?8290" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Solarmax 200 Watts Panel + Free Controller'
                        price={91} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/964794/1.jpg?9463"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/964794/1.jpg?9463" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Infinix X1 32" Inch FRAMELESS Smart AndroidTV,In-Built Wi-Fi,Google'
                        price={225} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/401733/1.jpg?2953"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/401733/2.jpg?2953" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Ausdom Active Noise Cancelling Wireless Headphone'
                        price={34} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/472633/1.jpg?3247"
                        image2="https://ke.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/60/472633/2.jpg?3247" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='WEBB GW24 23.8-Inch All-In-One Desktop Intel Core I5-10th Gen, 8GB, 256GB SSD, 1TB HDD'
                        price={800} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/131925/1.jpg?4347"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/131925/1.jpg?4347" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Bruhm BFD 200MD - Double Door Refrigerator, 220L - Inox'
                        price={385} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/130033/1.jpg?0397"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/130033/3.jpg?0397" 
                        rating={4} 
                        colors="Colors" />

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

                    
                    <div className="home__electronics">
                        <div className="col1">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/16_970x.jpg?v=1620375410" alt="" />
                        </div>
                        <div className="col2">
                        <Product 
                        title='Fashion Mens Vintage Printing Ethnic Short Sleeve Shirt'
                        price={9} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/675033/1.jpg?0157"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/675033/2.jpg?0157" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Urbanai T-Shirt Builder - White & Black'
                        price={7} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/782834/1.jpg?8834"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/245634/1.jpg?9774" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Mens Ethnic Short Sleeve Casual Blouse Tops'
                        price={11} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/015434/1.jpg?0973"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/015434/4.jpg?0973" 
                        rating={4} 
                        colors="Colors" />

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
                        <Product 
                        title='Fashion Jungle Green Bomber Jacket'
                        price={28} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/713072/1.jpg?3467"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/713072/1.jpg?3467" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Jeans Comfortable Slim Fit Casual & Formal Mens - Black'
                        price={13} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/451132/1.jpg?8817"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/451132/1.jpg?8817" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Mens Breathable Mesh Shoes -Red'
                        price={7} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/170243/1.jpg?0899"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/170243/5.jpg?0899" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Fashion New African Kitenge Fabric:- 100%cotton'
                        price={31} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/143482/1.jpg?2056"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/143482/1.jpg?2056" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Liao Men Official Shoes-Brown'
                        price={24} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/822451/1.jpg?8095"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/822451/3.jpg?8095" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Fashion YELLOW/BLUE DASHIKI UNISEX SHIRT'
                        price={9} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/826872/1.jpg?4454"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/66/826872/1.jpg?4454" 
                        rating={4} 
                        colors="Colors" />

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
                                <div className="large__icon"><i className="fas fa-star"></i></div>
                                <div>
                                    <h3>QUALITY AND SAVING</h3>
                                </div>
                                <div>
                                    <p>Comprehensive quality control and affordable prices</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fas fa-warehouse"></i></div>
                                <div>
                                    <h3>GLOBAL WAREHOUSE</h3>
                                </div>
                                <div>
                                    <p>37 overseas warehouses</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fas fa-shuttle-van"></i></div>
                                <div>
                                    <h3>FAST SHIPPING</h3>
                                </div>
                                <div>
                                    <p>Fast and convenient door to door delivery</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fas fa-shield-alt"></i></div>
                                <div>
                                    <h3>PAYMENT SECURITY</h3>
                                </div>
                                <div>
                                    <p>More than 10 different secure payment methods</p>
                                </div>
                            </div>
                            <div>
                                <div className="large__icon"><i className="fas fa-question"></i></div>
                                <div>
                                    <h3>HAVE QUESTIONS?</h3>
                                </div>
                                <div>
                                    <p>24/7 Customer Service - We are here and happy to help!</p>
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
                    <input className="sub__input" type="email" placeholder="Your Email" />
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
