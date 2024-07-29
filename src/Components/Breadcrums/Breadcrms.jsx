import React from 'react'
import './Breadcrums.css'
import arrow from '../Assets/breadcrum_arrow.png'



const Breadcrms = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{product.category}<img src={arrow} alt="" /> {product.name}

      
    </div>
  )
}

export default Breadcrms
