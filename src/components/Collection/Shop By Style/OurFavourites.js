import React from 'react'
import HeadingBanner from '../Reusable/HeadingBanner'
import BrandsNav from '../Reusable/BrandsNav'
import { brandsNavData } from '../../../data/Collection/BrandsNavData'
import AllProductsThreeInLine from '../Reusable/AllProductsThreeInLine'
import { productSliderData } from '../../../data/Home/ProductSliderData'
import FeaturedProducts from '../FeaturedProducts'
import SmallAd from '../Reusable/SmallAd'

const OurFavourites = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    return (
        <div>
            <HeadingBanner src={src} title={'Our Favourites'} />
            <BrandsNav data={brandsNavData} />
            <AllProductsThreeInLine data={productSliderData} />
            <SmallAd />
            <FeaturedProducts />
        </div>
    )
}

export default OurFavourites