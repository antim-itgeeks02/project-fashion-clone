import React from 'react'
import ShopByBrandResuble from './Reusable/ShopByBrandResuble'
import { featuredProductsData } from '../../data/Collection/FeaturedProductsData'
import '../styles/Collections/Reusable/FeaturedProducts.css'
const FeaturedProducts = () => {
    return (
        <div className='featuredProductsMain'>
            <h2 className='featuredProductsH2'>Featured Brands</h2>
            <div className='featuredProductsUnderline'></div>
            <div className='featuredProductsContainer'>
                {
                    featuredProductsData.map((watch, index) => {
                        return (
                            <ShopByBrandResuble key={index} watch={watch} />
                        )
                    })

                }
            </div>
        </div>
    )
}

export default FeaturedProducts