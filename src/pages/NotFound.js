import React from 'react'
import Discount from '../components/Discount'
import ServiceInfo from '../components/ServiceInfo' 
import ErrorBody from '../components/ErrorBody'
import Header from '../components/Header'
import Footer from '../components/Footer'
const NotFound = () => {
  return (
   <>
   <Header/>
    <ErrorBody/>
   <Discount/>
   <ServiceInfo/>
   <Footer/>
   </>
  )
}

export default NotFound
