import React from 'react'
import './newcollection.css'
import new_collection from'../Assets/new_collections'
import Item from '../Items/Item'

const Newcollection = () => {
  return (
    <div className='newcollections'>
    <h1>NEW COLLECTIONS</h1>
    <hr/>
    <div className="collection">
        {new_collection.map((items,i)=>{
            return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            

        })}
    </div>
    
      
    </div>
  )
}

export default Newcollection
