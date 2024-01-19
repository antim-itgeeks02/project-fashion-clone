import React from 'react'
import AutoImageSlider from '../Home/AutoImageSlider';
import BrandsLogo from '../Home/BrandsLogo';
import BuyNowPayLater from '../Home/BuyNowPayLater';
import Category from '../Home/Category';
import Features from '../Home/Features';
import ProductSlider from '../Home/ProductSlider';
import ReviewSection from '../Home/ReviewSection';
import TwoTypes from '../Home/TwoTypes';

const Home = () => {
    return (
        <>
            <AutoImageSlider />
            <Features />
            <Category />
            <ProductSlider />
            <BrandsLogo />
            <BuyNowPayLater />
            <TwoTypes/>
            <ReviewSection />
        </>
    )
}

export default Home