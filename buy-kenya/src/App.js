import React, { useEffect } from "react";
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./components/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider"

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
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
        <Route path="*" element={<Home/>}/>
        <Route exact path="/" element={<Home/>} />
       </Routes>
    </div>

    </Router>
  );
}

export default App;
