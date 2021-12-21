import React from "react";
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="app">
       <Routes>
        <Route exact path="/cart" element={<Cart/>} />
        <Route path="*" element={<Home/>}/>
        <Route exact path="/" element={<Home/>} />
       </Routes>
    </div>

    </Router>
  );
}

export default App;
