import React from 'react'
import ContactBody from '../components/ContactBody'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import ServiceInfo from '../components/ServiceInfo'

const Contact = () => {
  return (
    <>
    <GreenyShop
    Title="Contact Us"
    />
    <ContactBody/>
    <Discount/>
    <ServiceInfo/>
    </>
  )
}

export default Contact
