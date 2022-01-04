import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import '../css/Home.css';
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
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-fridge_1024x1024_crop_center.jpg?v=1616410888" alt="" />
                            <p>Home Appliances</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-microwave_1024x1024_crop_center.jpg?v=1616410900" alt="" />
                            <p>Kitchen Appliances</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-camera_1024x1024_crop_center.jpg?v=1616410914" alt="" />
                            <p>Cameras</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-headphone_1024x1024_crop_center.jpg?v=1616410951" alt="" />
                            <p>Accessories</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-kettle_1024x1024_crop_center.jpg?v=1616410925" alt="" />
                            <p>Consumables</p>
                        </div>
                        <div className="home__categoryImageBox">
                            <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/icon-smart_1024x1024_crop_center.jpg?v=1616410939" alt="" />
                            <p>Smart Homes</p>
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

                        <Product 
                        title="Generic Bluetooth Headphones 5.0 Wireless Headphones LED Light Foldable-Black"
                        price={10} 
                        image1="https://demo.sirv.com/hc/Bose-700-a.jpg"
                        rating={3} colors="Colors" 
                        image2="https://demo.sirv.com/hc/Bose-700-b.jpg" />

                        <Product 
                        title="Vivo Y1s 6.22'' 32 GB + 2 GB (Dual SIM), 4030mAh - Aurora Blue"
                        price={220} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/481874/1.jpg?7065"
                        image2="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-3-2_360x.jpg?v=1616829324"
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='HP Refurbished EliteBook 8460 14" Intel Core I5 4GB, 500GB - Silver'
                        price={300} 
                        image1="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-5_d76f9b0e-5aff-471b-8729-06886a7a1da8_360x.jpg?v=1617353588"
                        image2="https://cdn.shopify.com/s/files/1/0064/4435/1539/products/product-laptop-1_52f05dfc-b5e1-423c-b7a7-e690dc200552_360x.jpg?v=1616831318" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title="Generic PS4 Pad DualShock 4 Wireless Controller Remote Video Gamepad"
                        price={55} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/648784/1.jpg?5417"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/416784/1.jpg?5299"
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Vitron 32" Inch Smart Android Tv, Netflix, Youtube, Facebook'
                        price={300} 
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/401255/1.jpg?1990"
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/831235/1.jpg?6944" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Vitron Subwoofer HOMETHEATRE- Sound Bar USB/FM/BT-9,000W'
                        price={66} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/684633/1.jpg?8150"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/296672/1.jpg?7995" 
                        rating={5} 
                        colors="Colors" />

                        <Product 
                        title='Apple IPhone 8 Plus, 64GB ( Single SIM ), Space Grey'
                        price={410} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/350582/1.jpg?7564"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/711541/1.jpg?9154" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Jumper EZpad 7 10.1 Inch Portable Metal Tablet With Intel'
                        price={382} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/055025/1.jpg?1037"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/055025/3.jpg?1037" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Rashnik RN-1142 2.2L Electric Kettle Household Appliance'
                        price={8} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/477784/1.jpg?1608"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/477784/2.jpg?1608" 
                        rating={4} 
                        colors="Colors" />

                        </Carousel>
                        
                    </div>

                </div>
                <div>
                    <div>
                        <h2>Featured Products</h2>
                    </div>

                    <div className="home__rowThree">
                    <Carousel itemsToShow={5}>
                        <Product 
                        title='Generic Ultra Slim 2.4 GHz Optical Wireless Mouse'
                        price={3} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/885691/1.jpg?4785"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/885691/5.jpg?4785" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Smart Ladies Quartz Watch + FREE Gift Box'
                        price={5} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/741212/1.jpg?8068"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/741212/4.jpg?8068" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Jbl Xtreme 3 - Portable Bluetooth Speaker-Squad'
                        price={399} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/098984/1.jpg?4911"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/098984/2.jpg?4911" 
                        rating={5} 
                        colors="Colors" />

                        <Product 
                        title='Generic Oil Painting Pattern Shockproof Protective Case For IPhone 13 Pro Max(Newspaper)'
                        price={4} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/835355/1.jpg?0936"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/835355/1.jpg?0936" 
                        rating={5} 
                        colors="Colors" />

                        <Product 
                        title='Pangpai Wireless Bluetooth P15 Heaphone'
                        price={8} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/45449/1.jpg?0192"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/45449/4.jpg?0192" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Silicone Protective Case Cover Storage Box For AirPods Pro 3 Bluetooth Earphone-Blue'
                        price={3} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/948983/1.jpg?7829"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/948983/1.jpg?7829" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Rashnik NEW 3 IN 1 BLENDER (RN-1012)'
                        price={31} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/021634/1.jpg?5148"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/021634/2.jpg?5148" 
                        rating={4} 
                        colors="Colors" />
                        
                    </Carousel>
                    </div>

                </div>
                <div className="home__sectionFive">
                    <div className="home__sectionTitle">
                        <h2>Recommended For You</h2>
                    </div>

                    <div className="home__row">
                    <Carousel itemsToShow={5}>

                        <Product 
                        title='Ballantine Blended Scotch Whiskey - 750 Ml.'
                        price={18} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/347033/2.jpg?0407"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/347033/3.jpg?0407" 
                        rating={5} 
                        colors="Colors" />

                        <Product 
                        title='Fashion Mens Sneakers Big Size Running Shoes-Black'
                        price={20} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/673613/1.jpg?4066"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/673613/1.jpg?4066" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Generic For OPPO Watch 46MM Smart Watch Metal Strap'
                        price={11} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/368205/1.jpg?0563"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/368205/2.jpg?0563" 
                        rating={4} 
                        colors="Colors" />

                        <Product 
                        title='Hisense U40 Lite, 5", 8GB + 1GB RAM (Dual SIM), 2000mAh, Blue'
                        price={53} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/283205/2.jpg?6666"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/283205/3.jpg?6666" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='NIVEA MEN Deep Antibacterial Anti-Perspirant Rollon,48h - 50ml (Pack Of 2)'
                        price={5} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/710103/3.jpg?6224"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/710103/2.jpg?6224" 
                        rating={3} 
                        colors="Colors" />

                        <Product 
                        title='Bata Navy Unisex Sporty Shoe'
                        price={6} 
                        image1="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/015062/1.jpg?1570"
                        image2="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/015062/3.jpg?1570" 
                        rating={3} 
                        colors="Colors" />

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
