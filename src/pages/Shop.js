import React from 'react'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import ServiceInfo from '../components/ServiceInfo'
import ShopBody from '../components/ShopBody'

const Shop = () => {
  return (
   <>
   <GreenyShop
     Title="Greeny Shop"
   />
   <ShopBody/>
   <Discount/>
   <ServiceInfo/>
   </>
  )
}

export default Shop
