import React, {useState} from 'react'
import Header from './Header'
import '../css/Login.css'
import { auth } from "./firebase"
  
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

    }
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
        })
        .catch(error => alert(error.message))

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
