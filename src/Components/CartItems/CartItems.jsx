import React, { useContext } from 'react'
import './cartitem.css'
import { ShopContext } from '../../Context/Shopcontext'
import remove_icon  from '../Assets/cart_cross_icon.png'



const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removefromcart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cart-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return  <div>
                          <div className="cart-item-format cart-format-main">
                              <img src={e.image} alt="" className='cartIcon-product-icon'/>
                              <p>{e.name}</p>
                              <p>${e.new_price}</p>
                              <button className='cartitems-quality'>{cartItems[e.id]}</button>
                              <p>${e.new_price*cartItems[e.id]}</p>
                              <img className='CartIcon-removeicon' src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt="" />
                           </div>
                            <hr />
                
                        </div>
    
            }
            return null;
        })}
        <div className="cartitem-down">
            <div className="cartitme-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cart-item-totalitme">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-item-totalitme">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-item-totalitme">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>

            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitem_promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default CartItems
