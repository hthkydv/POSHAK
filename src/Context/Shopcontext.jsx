import React, { createContext, useState } from 'react'
import all_product  from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]= 0;
        
    }
    return cart;
}

const ShopContextProvider =(props)=>{

    const [cartItems,setcartItem]=useState(getDefaultCart());

    const addTocart =(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);


    }
    
    
    const removefromcart=(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    const contextVaue={all_product,cartItems,addTocart,removefromcart};

    

    return(
        <ShopContext.Provider value={contextVaue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;