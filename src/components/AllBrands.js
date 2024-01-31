import React, { useEffect, useState } from 'react'
import HeadingBanner from './Collection/Reusable/HeadingBanner'
import BrandsNav from './Collection/Reusable/BrandsNav'
import AllProductsThreeInLine from './Collection/Reusable/AllProductsThreeInLine'
import SmallAd from './Collection/Reusable/SmallAd'
import FeaturedProducts from './Collection/FeaturedProducts'
import { useParams } from 'react-router-dom'
import { brandsNavData } from '../data/Collection/BrandsNavData'
import SingleBrand from './SingleBrand'

const NewBrands = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    const { name } = useParams();
    const { id } = useParams();
    // console.log(id)

    const [dataToShow, setDataToShow] = useState([]);

    async function fetchDataToShow() {
        const response = await fetch(`https://fashionopolism-galleria.myshopify.com/collections/${name}/products.json`);
        const mainData = await response.json();
        // console.log(mainData);
        setDataToShow(mainData.products);
    }
    useEffect(() => {
        fetchDataToShow();
    }, [name])
    return (
        (
            id ? (<SingleBrand/>) :
                (<div>
                    <HeadingBanner src={src} title={name} />
                    <BrandsNav data={brandsNavData} />
                    <AllProductsThreeInLine data={dataToShow} />
                    <SmallAd />
                    <FeaturedProducts />
                </div>)
        )
        // (
        //     id ? (<SingleOneDemo allThreeWatches={dataToShow} chanege={name}/>) :
        //         (<div>
        //             <HeadingBanner src={src} title={name} />
        //             <BrandsNav data={brandsNavData} />
        //             <AllProductsThreeInLine data={dataToShow} />
        //             <SmallAd />
        //             <FeaturedProducts />
        //         </div>)
        // )
    )
}
export default NewBrands