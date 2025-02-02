import React from 'react'
import './CSS/login.css'

const Loginsighup = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsign-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password"  placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='login-signup-login'>Already have an account ? <span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>

      
    </div>
  )
}

export default Loginsighup
