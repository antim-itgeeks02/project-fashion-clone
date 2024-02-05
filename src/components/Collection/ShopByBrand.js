import React from 'react'
import '../styles/Collections/Collection/ShopBuyBrand.css'
import {ShopByBrandData} from '../../data/Collection/ShopByBrandData'
import ShopByBrandResuble from './Reusable/ShopByBrandResuble'

const ShopByBrand = () => {
  return (
    <div className='shopBuyBrand'>
        <h2 className='shopByBrandHeading'>SHOP BY BRAND</h2>
        <div className='borderDiv'></div>
        <div className='allWatches'>
            {ShopByBrandData.map((watch,index) => {
                return(
                    <ShopByBrandResuble key={index} watch={watch}/>
                )
            })}
        </div>
    </div>
  )
}

export default ShopByBrand