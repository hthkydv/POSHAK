import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/Shopcontext'
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='Shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSor">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((items,i)=>{
          if(props.category===items.category){
            return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
          }
          else{
            return null;
          }


        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      
    </div>
  )
}

export default ShopCategory
