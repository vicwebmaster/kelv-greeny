import React from 'react'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import OfferBody from '../components/OfferBody'
import ServiceInfo from '../components/ServiceInfo'

const Offer = () => {
  return (
    <>
    <GreenyShop
    Title="Discount & 0ffers"
    />
    <OfferBody/>
    <Discount/>
    <ServiceInfo/>
    </>
  )
}

export default Offer
