import React from 'react'
import '../styles/Collections/Collection/ShopBuyBrand.css'
import {ShopByBrandData} from '../../data/Collection/ShopByBrandData'


const ShopByBrand = () => {
  return (
    <div className='shopBuyBrand'>
        <h2 className='shopByBrandHeading'>SHOP BY BRAND</h2>
        <div className='borderDiv'></div>
        <div className='allWatches'>
            {ShopByBrandData.map((watch,index) => {
                return(
                    <div className='singleWatch' key={index}>
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

export default ShopByBrand