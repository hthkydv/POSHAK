import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/Shopcontext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addTocart}=useContext(ShopContext);

  return (
    <div className='ProductDisplay'>
      <div className="productDisplay-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
          <img src={product.image} alt="Product thumbnail" />
        </div>
        <div className="productdisplay-img">
          <img className='product-display-main-img' src={product.image} alt="Main product" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_icon} alt="Star rating" />
          <img src={star_dull} alt="Star rating" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="product-display-right-price-old">${product.old_price}</div>
            <div className="productdisplay-rightprice-new">${product.new_price}</div>

        </div>
        <div className="productdisplay-right-dis">
        Elevate your casual wardrobe with our Classic Cotton T-Shirt, designed for comfort and style. Crafted from 100% premium cotton, this T-shirt offers a soft, breathable fit that's perfect for everyday wear. Whether you're lounging at home, heading out for a casual day, or layering it under a jacket, this versatile piece is a must-have.
        </div>
        <div className="productdisplay-rightsize">
            <h1>Select size</h1>
            <div className="product-display-rightsizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{ addTocart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-cat'><span>Category:</span>Women ,T-shirt,Crop top</p>
        <p className='productdisplay-right-cat'><span>Tags:</span>Modern ,Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
