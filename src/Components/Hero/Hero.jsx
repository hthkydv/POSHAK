import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVAL TODAY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Latest</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>
            <div className="hero_latest_btn">
                <div>
                    Latest Collection
                </div>
                <img src={arrow_icon} alt="" />
            </div>

        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />

        </div>
      
    </div>
  )
}

export default Hero
