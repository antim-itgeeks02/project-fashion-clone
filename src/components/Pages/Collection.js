import React from 'react'
import CollectionBanner from '../Collection/CollectionBanner'
import ShopBuyBrand from '../Collection/ShopByBrand'
import { Outlet } from 'react-router-dom'

const Collection = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Collection