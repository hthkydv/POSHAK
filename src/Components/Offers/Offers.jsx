import React from 'react'
import './offers.css'
import exculsive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exculsive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>

        </div>
        <div className="offers-right">
            <img src={exculsive_img} alt="" />

        </div>
      
    </div>
  )
}

export default Offers
