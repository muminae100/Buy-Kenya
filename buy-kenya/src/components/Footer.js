import React from 'react'
import '../css/Footer.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
         
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
        <div className="footer">
            <div className="footer__up">
            <div className="footer__left">
                <h3>Categories</h3>
                <p><a href="">Appliances</a></p>
                <p><a href="">Computers & Laptops</a></p>
                <p><a href="">Cameras</a></p>
                <p><a href="">Phones & Tablets</a></p>
                <p><a href="">Televisions</a></p>
                <p><a href="">Video Games & Systems</a></p>
                <p><a href="">Weekly deals</a></p>
            </div>
            <div className="footer__middle1">
                <h3>Further Info</h3>
                <p><a href="">About Us</a></p>
                <p><a href="">Contact Us</a></p>
                <p><a href="">Brands</a></p>
                <p><a href="">Sitemap</a></p>
                <p><a href="">Gift Certificates</a></p>
            </div>
            <div className="footer__middle2">
                <h3>Customer Service</h3>
                <p><a href="">Help & FAQs</a></p>
                <p><a href="">Terms of Conditions</a></p>
                <p><a href="">Privacy Policy</a></p>
                <p><a href="">Online Returns Policy</a></p>
                <p><a href="">Rewards Program</a></p>
                <p><a href="">Rebate Center</a></p>
                <p><a href="">Partners</a></p>
            </div>
            <div className="footer__right">
                <div className="footer__logo">
                    <span>Buy Kenya</span>
                    <i class="fas fa-shopping-basket"></i>
                </div>
                <div className="frs1">
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>685 Market Street San Francisco, CA 94105, US</span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>Call us at (415) 555-5555</span>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <span>Email: example@domain.com</span>
                </div>
                </div>
                <div className="social-icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-pinterest"></i>
                    <i className="fa fa-youtube"></i>
                </div>
            </div>
            </div>
            <div className="footer__bottom1">
                <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/1_x37.png?v=1615514832" alt="" />
            </div>
            <div className="footer__bottom2">
                <div>
                    <p><small>© 2021 Buy Kenya. All Rights Reserved.</small></p>
                </div>
                <div className="footer__bottom2Images">
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Visa_Inverted_x32.png?v=1615515285" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/MasterCard_x32.png?v=1615515684" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/American-Express_x32.png?v=1615515315" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Discover_x32.png?v=1615515617" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/PayPal_x32.png?v=1615515557" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Sage_Inverted_x32.png?v=1615515643" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Google_Wallet_x32.png?v=1615515655" alt="" />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Footer
