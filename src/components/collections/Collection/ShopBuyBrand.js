import React from 'react'
import '../../styles/Collections/Collection/ShopBuyBrand.css'
import {ShopBuyBrandData} from '../../../data/Collection/ShopBuyBrandData'


const ShopBuyBrand = () => {
  return (
    <div className='shopBuyBrand'>
        <h2 className='shopByBrandHeading'>SHOP BY BRAND</h2>
        <div className='borderDiv'></div>
        <div className='allWatches'>
            {ShopBuyBrandData.map((watch,index) => {
                return(
                    <div className='singleWatch'>
                        <img src= {watch.image}/>
                        <h3>{watch.Brand}</h3>
                        <p>{watch.item}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShopBuyBrand