import React from 'react'
import Header from './Header'
import '../css/Login.css'

function Login() {
    return (
        <>
        <Header />
        <div className="login">
        <div class="login-form">
    <form>
      <h1>Login</h1>
      <div class="form-group">
        <input type="email" name="email" placeholder="E-mail Address" />
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div>
      <div class="form-group">
        <input type="password" name="psw" placeholder="Password" />
        <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>      
      <button class="login-btn">Login</button>      
      <a class="reset-psw" href="#">Forgot your password?</a>
      <div class="seperator"><b>or</b></div>
      <p>Sign in with your social media account</p>
     
      <div class="social-icon">
        <button type="button"><i class="fa fa-twitter"></i></button>
        <button type="button"><i class="fa fa-facebook"></i></button>
      </div>
    </form>
    </div>
        </div>
        </>
    )
}

export default Login
