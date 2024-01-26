import React, { useEffect, useState } from 'react'
import HeadingBanner from './Collection/Reusable/HeadingBanner'
import BrandsNav from './Collection/Reusable/BrandsNav'
import AllProductsThreeInLine from './Collection/Reusable/AllProductsThreeInLine'
import SmallAd from './Collection/Reusable/SmallAd'
import FeaturedProducts from './Collection/FeaturedProducts'
import { mainData } from '../data/Collection/MainData'
import { useParams } from 'react-router-dom'
import { brandsNavData } from '../data/Collection/BrandsNavData'
import SingleOneDemo from './SingleOneDemo'

const NewBrands = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    const { name } = useParams();
    const { id } = useParams();

    const [dataToShow, setDataToShow] = useState([]);
    useEffect(() => {
        for (let i = 0; i < mainData.length; i++) {
            if (mainData[i].id === name) {
                setDataToShow(mainData[i].value);
                // console.log(mainData[i].value);
            }
        }
    }, [name])
    return (
        (
            id ? (<SingleOneDemo allThreeWatches={dataToShow} chanege={name}/>) :
                (<div>
                    <HeadingBanner src={src} title={name} />
                    <BrandsNav data={brandsNavData} />
                    <AllProductsThreeInLine data={dataToShow} />
                    <SmallAd />
                    <FeaturedProducts />
                </div>)
        )
    )
}
export default NewBrands