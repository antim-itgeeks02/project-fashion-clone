import React from 'react'
import HeadingBanner from '../Reusable/HeadingBanner'
import BrandsNav from '../Reusable/BrandsNav'
import { brandsNavData } from '../../../data/Collection/BrandsNavData'
import AllProductsThreeInLine from '../Reusable/AllProductsThreeInLine'
import { breitlingData } from '../../../data/Collection/Shop By Brand/BreitlingData'
import FeaturedProducts from '../FeaturedProducts'
import SmallAd from '../Reusable/SmallAd'

const Breitling = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    return (
      <div>
        <HeadingBanner src={src} title={'Breitling'} />
        <BrandsNav data={brandsNavData} />
        <AllProductsThreeInLine data={breitlingData} />
        <SmallAd />
        <FeaturedProducts />
      </div>
    )
}

export default Breitling