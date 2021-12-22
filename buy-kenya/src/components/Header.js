import React from 'react'
import '../css/Header.css'
import { Link } from "react-router-dom"
import { useStateValue } from "../StateProvider"

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" 
                src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/ellamart-logo-w.png?v=1621222131" alt="Logo" />
            </Link>
            <div className="header__hotline">
                <p>Available 24/7 at (+84) 90 12345</p>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i style={{"padding":"5px","backgroundColor":"#cd9042","height":"22px","font-size":"20px"}} 
                className="fa fa-search header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionContentOne">
                        <i className="fa fa-heart"></i>
                    </span>
                    <span className="header__optionContentTwo">Wish Lists</span>
                </div>
                <div className="header__option">
                    <span className="header__optionContentOne">Returns</span>
                    <span className="header__optionContentTwo">& orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionContentOne">
                        <i className="fas fa-user-alt"></i>
                    </span>
                    <span className="header__optionContentTwo">Login</span>
                </div>
               
               <Link to="/cart">
                    <div className="header__shoppingBasket">
                        <i style={{"padding":"5px","font-size":"30px","position":"relative"}} className="fa fa-shopping-cart"></i>
                        <span className="header__basketCount">{basket?.length}</span>
                    </div>
               </Link>
                
            </div>
        </div>
    )
}

export default Header
