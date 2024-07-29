import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>
            Get Exclusive offers on your Email
            <p>Subcribe to our newsletter and stay updated !</p>
            <div>
                <input type="email" placeholder='your email id' />
                <button>Subcribe</button>
            </div>
        </h1>
      
    </div>
  )
}

export default Newsletter
