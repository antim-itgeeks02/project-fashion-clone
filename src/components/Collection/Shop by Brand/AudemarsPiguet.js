import React from 'react'
import HeadingBanner from '../Reusable/HeadingBanner'
import BrandsNav from '../Reusable/BrandsNav'
import { brandsNavData } from '../../../data/Collection/BrandsNavData'
import AllProductsThreeInLine from '../Reusable/AllProductsThreeInLine'
import { audemarsPiguetData } from '../../../data/Collection/Shop By Brand/AudemarsPiguetData'
import FeaturedProducts from '../FeaturedProducts'
import SmallAd from '../Reusable/SmallAd'

const AudemarsPiguet = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    return (
      <div>
        <HeadingBanner src={src} title={'Audemars Piguet'} />
        <BrandsNav data={brandsNavData} />
        <AllProductsThreeInLine data={audemarsPiguetData} />
        <SmallAd />
        <FeaturedProducts />
      </div>
    )
}

export default AudemarsPiguet