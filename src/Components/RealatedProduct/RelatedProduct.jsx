import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'


const RelatedProduct = () => {
  return (
    <div className='realtedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="realtedProduvt-item">
            {data_product.map((items,i)=>{
                return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>

            })}

        </div>
      
    </div>
  )
}

export default RelatedProduct
