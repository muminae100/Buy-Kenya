import React from 'react';
import '../css/Header.css';
import { Link } from "react-router-dom"
import { useStateValue } from "../StateProvider";
import { auth } from './Firebase';
import {signOut} from 'firebase/auth';
import styled from 'styled-components';
// import Modal from 'react-modal';


// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('#root')
  

function Header() {
    const [{ wishlistbasket,basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if (user){
            signOut(auth);
        }
    }



    // var subtitle;
    // const [modalIsOpen,setIsOpen] = React.useState(false);
    // function openModal() {
    //     setIsOpen(true);
    // }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    // function closeModal(){
    //     setIsOpen(false);
    // }


    return (
        <>
        {/* <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div> */}


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
                        <i style={{"fontSize":"32px","position":"relative","padding":"5px"}} className="far fa-heart"></i>
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
            <div className="header__bars">
                <i style={{"padding":"5px","fontSize":"30px"}} className="fa fa-bars"></i>
            </div>
        </div>
        </>
    )
}

export default Header
