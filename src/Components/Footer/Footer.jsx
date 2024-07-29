import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import ig from '../Assets/instagram_icon.png'
import pintest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>POSHAK.COM</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={ig} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintest} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" />
        </div>
    </div>
    <div className="footer-copy-right">
        <hr />
        <p>Copyright @2024 -All Rights Reserved</p>
    </div>


      
    </div>
  )
}

export default Footer
