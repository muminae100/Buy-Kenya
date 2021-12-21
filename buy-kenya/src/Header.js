import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" 
            src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/ellamart-logo-w.png?v=1621222131" />
            <div className="header__hotline">
                <p>Available 24/7 at (+84) 90 12345</p>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionContentOne">Love icon</span>
                    <span className="header__optionContentTwo">Wish Lists</span>
                </div>
                <div className="header__option">
                    <span className="header__optionContentOne">Returns</span>
                    <span className="header__optionContentTwo">& orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionContentOne">Account icon</span>
                    <span className="header__optionContentTwo">Login</span>
                </div>
                <div className="header__option">
                    <span className="header__optionContentOne">Cart icon</span>
                </div>
            </div>
        </div>
    )
}

export default Header
