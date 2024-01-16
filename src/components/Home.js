import React from 'react'
import Advertisment from './Home/Advertisment';
import AutoImageSlider from './Home/AutoImageSlider';
import BrandsLogo from './Home/BrandsLogo';
import BuyNowPayLater from './Home/BuyNowPayLater';
import Category from './Home/Category';
import Features from './Home/Features';
import Highlights from './Home/Highlights';
import ProductSlider from './Home/ProductSlider';
import ReviewSection from './Home/ReviewSection';

const Home = () => {
    return (
        <>
            <Advertisment />
            <AutoImageSlider />
            <Features />
            <Category />
            <ProductSlider />
            <BrandsLogo />
            <BuyNowPayLater />
            <Highlights />
            <ReviewSection />
        </>
    )
}

export default Home