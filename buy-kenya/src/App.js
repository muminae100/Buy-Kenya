import React, { useEffect } from "react";
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./components/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider"

const promise = loadStripe('pk_test_51K9wHWEPTiQ984IpednLEVDN22SYjt4PU4ajhvz4u5VFtS5d4gvsGweerObJy0jWEu7VZ3W6MAUtECxcr8gs7Clx00ZsaKllnW');


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])

  return (
    <Router>
      
      <div className="app">
       <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/checkout" element={<Elements stripe={promise}><Checkout/></Elements>} />
        <Route exact path="/orders" element={<Orders/>} />
        <Route path="*" element={<Home/>}/>
        <Route exact path="/" element={<Home/>} />
       </Routes>
    </div>

    </Router>
  );
}

export default App;
