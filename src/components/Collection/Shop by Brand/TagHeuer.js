import React from 'react'
import HeadingBanner from '../Reusable/HeadingBanner'
import BrandsNav from '../Reusable/BrandsNav'
import { brandsNavData } from '../../../data/Collection/BrandsNavData'
import AllProductsThreeInLine from '../Reusable/AllProductsThreeInLine'
import { tagHeuerData } from '../../../data/Collection/Shop By Brand/TagHeuerData'


import FeaturedProducts from '../FeaturedProducts'
import SmallAd from '../Reusable/SmallAd'
import { Outlet } from 'react-router-dom'
import { mainData } from '../../../data/Collection/Shop By Brand/MainData'
// {setPath}
const TagHeuer = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    return (
        <div>
            <HeadingBanner src={src} title={'Tag Heuer'} />
            <BrandsNav data={brandsNavData} />
            <AllProductsThreeInLine  data={mainData[0].value} />
            {/* setPath={setPath} */}
            <SmallAd />
            <FeaturedProducts />
            <Outlet/>
        </div>
    )
}

export default TagHeuer