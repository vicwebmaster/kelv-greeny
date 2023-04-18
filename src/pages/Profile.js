import React from 'react'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import ProfileBody from '../components/ProfileBody'
import ServiceInfo from '../components/ServiceInfo'
const Profile = () => {
  return (
    <>
    <GreenyShop
    Title="My Profile"
    />
    <ProfileBody/>
    <Discount/>
    <ServiceInfo/>
    </>
  )
}

export default Profile
