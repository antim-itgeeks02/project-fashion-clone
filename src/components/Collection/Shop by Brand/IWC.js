import React from 'react'
import HeadingBanner from '../Reusable/HeadingBanner'
import BrandsNav from '../Reusable/BrandsNav'
import { brandsNavData } from '../../../data/Collection/BrandsNavData'
import AllProductsThreeInLine from '../Reusable/AllProductsThreeInLine'
import { IwcData } from '../../../data/Collection/Shop By Brand/IWCData'
import FeaturedProducts from '../FeaturedProducts'
import SmallAd from '../Reusable/SmallAd'

const IWC = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    return (
      <div>
        <HeadingBanner src={src} title={'IWC'} />
        <BrandsNav data={brandsNavData} />
        <AllProductsThreeInLine data={IwcData} />
        <SmallAd />
        <FeaturedProducts />
      </div>
    )
}

export default IWC