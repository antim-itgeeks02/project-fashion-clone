import React from 'react'
import '../styles/Home/OurSlider.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurSlider = ({ products }) => {
    const config = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return (
        <div className='ourSlider'>
            <Slider {...config}>
            {products.map((product, index) => {
                return (
                    <div className='singleProduct' key={index}>
                        <img className='singleProductImage' src={product.image} />
                        <p>{product.name}</p>
                        <p>{product.brand}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })}
            </Slider>
        </div>
    )
}

export default OurSlider

