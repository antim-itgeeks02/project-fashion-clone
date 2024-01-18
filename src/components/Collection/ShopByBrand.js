import React from 'react'
import '../styles/Collections/Collection/ShopBuyBrand.css'
import {ShopByBrandData} from '../../data/Collection/ShopByBrandData'
import {Link} from 'react-router-dom'


const ShopByBrand = () => {
  return (
    <div className='shopBuyBrand'>
        <h2 className='shopByBrandHeading'>SHOP BY BRAND</h2>
        <div className='borderDiv'></div>
        <div className='allWatches'>
            {ShopByBrandData.map((watch,index) => {
                return(
                    <div className='singleWatch' key={index}>
                        <Link to={watch.path} className='allAnchorsBlack'><img src= {watch.image} className='singleWatchimg'/></Link>
                        <Link to={watch.path} className='allAnchorsBlack'><h3 className='allWatchesH3'>{watch.Brand}</h3></Link>
                        <Link to={watch.path} className='allAnchorsBlack'><p>{watch.item}</p></Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShopByBrand