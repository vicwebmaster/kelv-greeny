import React from  'react'
import BestSeller from '../components/BestSeller'
import Collections from '../components/Collections'
import FeatureItem from '../components/FeatureItem'
import Niche from '../components/Niche'
import SideBar from '../components/SideBar'
import Cate from '../components/Cate'
import Brand from '../components/Brand'
import Client from '../components/Client'
import Discount from '../components/Discount'
const Home = () => {
  return (
    <>
    <SideBar/>
    <BestSeller/>
    <FeatureItem/>
   <Collections/>
   <Niche/>
   <Cate/>
   <Brand/>
   <Client/>
   <Discount/>
    </>
  )
}

export default Home
