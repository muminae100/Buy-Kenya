import React from 'react'
import '../css/Footer.css'
import { Link } from "react-router-dom"

function Footer() {
    return (
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
                <div>
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
    )
}

export default Footer
