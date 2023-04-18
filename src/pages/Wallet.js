import React from 'react'
import Discount from '../components/Discount'
import GreenyShop from '../components/GreenyShop'
import ServiceInfo from '../components/ServiceInfo'
import WalletBody from '../components/WalletBody'

const Wallet = () => {
  return (
    <>
    <GreenyShop
    Title="WALLET"
    />
    <WalletBody/>
    <Discount/>
    <ServiceInfo/>
    </>
  )
}

export default Wallet
