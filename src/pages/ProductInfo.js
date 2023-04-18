import React from 'react'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import RelatedProd from '../components/RelatedProd'
import ServiceInfo from '../components/ServiceInfo'
import ViewProduct from '../components/ViewProduct'
const ProductInfo = () => {
  return (
   <>
   <GreenyShop
   Title="Our Product"
   />
   <ViewProduct/>
   <RelatedProd/>
   <Discount/>
   <ServiceInfo/>
   </>
  )
}

export default ProductInfo
