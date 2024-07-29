import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrms from '../Components/Breadcrums/Breadcrms';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox.jsx';
import RelatedProduct from '../Components/RealatedProduct/RelatedProduct.jsx';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product =all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrms product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
