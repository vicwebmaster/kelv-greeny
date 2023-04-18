import React from 'react'
import AboutInfo from '../components/AboutInfo'
import AboutReason from '../components/AboutReason'
import AboutTeam from '../components/AboutTeam'
import BrandTest from '../components/BrandTest'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import ServiceInfo from '../components/ServiceInfo'
const About = () => {
  return (
    <>
    <GreenyShop
    Title="About Our Company"
    />
    <AboutInfo/>
    <BrandTest/>
    <AboutReason/>
    <AboutTeam/>
    <Discount/>
    <ServiceInfo/>
    </>
  )
}

export default About
