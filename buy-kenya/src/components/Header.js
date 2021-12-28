import React from 'react'
import '../css/Header.css'
import { Link } from "react-router-dom"
import { useStateValue } from "../StateProvider"
import { auth } from './Firebase'
import {signOut} from 'firebase/auth'

function Header() {
    const [{ wishlistbasket,basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if (user){
            signOut(auth);
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo">
                <span>Buy Kenya</span>
                <i class="fas fa-shopping-basket"></i>
                </div>
            </Link>
            <div className="header__hotline">
                <p>Available 24/7 at (+84) 90 12345</p>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput" placeholder="Search the store..." required />
                <button type="submit">
                <i
                className="fa fa-search header__searchIcon"></i>
                </button>
            </div>
            <div className="header__nav">
                <Link to={"/wishlist"}>
                <div className="header__option">
                    <span className="header__optionContentOne">
                        <i style={{"fontSize":"32px","position":"relative","padding":"5px"}} className="fa fa-heart"></i>
                        <span className="header__wishlistCount">{wishlistbasket?.length}</span>
                    </span>
                </div>
                </Link>
                <Link to='/orders'>
                <div className="header__option">
                    <span className="header__optionContentOne">Returns</span>
                    <span className="header__optionContentTwo">& orders</span>
                </div>
                </Link>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionContentOne">
                        {user ? `Hello, ${user.email}` : 'Hello,'}
                        
                    </span>
                    <span className="header__optionContentTwo">
                        {user ? 'Logout' : 'Login'}
                    </span>
                </div>
                </Link>
               <Link to="/cart">
                    <div className="header__shoppingBasket">
                        <i style={{"padding":"5px","fontSize":"35px","position":"relative"}} className="fa fa-shopping-cart"></i>
                        <span className="header__basketCount">{basket?.length}</span>
                    </div>
               </Link>
                
            </div>
        </div>
    )
}

export default Header
