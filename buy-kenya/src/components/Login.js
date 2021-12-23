import React, {useState} from 'react'
import Header from './Header'
import '../css/Login.css'
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore/lite';
import { auth, db } from './Firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (userCredential){
                navigate('/')
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });


    }
    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        
            const user = userCredential.user;
            if (userCredential){
                navigate('/')
            }
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

    }

    return (
        <>
        <Header />
        <div className="login">
        <div className="login-form">
            <form>
            <h1>Login</h1>
            <div className="form-group">
                <input type="email" name="email" placeholder="E-mail Address" value={email} onChange={e => setEmail(e.target.value)} />
                <span className="input-icon"><i className="fa fa-envelope"></i></span>
            </div>
            <div className="form-group">
                <input type="password" name="psw" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <span className="input-icon"><i className="fa fa-lock"></i></span>
            </div>      
            <button type="submit" onClick={signIn} className="login-btn">Login</button>      
            <a className="reset-psw" href="#">Forgot your password?</a>
            <div className="seperator"><b>or</b></div>
            <p>Sign in with your social media account</p>
            
            <div className="social-icon">
                <button type="button"><i className="fa fa-twitter"></i></button>
                <button type="button"><i className="fa fa-facebook"></i></button>
            </div>
            </form>
            <p style={{"margin":"10px","padding":"10px"}}>
                By signing-in you agree to Buy Kenya's Conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads Notice.
            </p>
            <div style={{"margin":"10px","padding":"10px"}}>
                <button style={{"width":"100%"}} onClick={register}>Register</button>
            </div>
        </div>
    </div>
        </>
    )
}

export default Login
