import React from 'react'
import '../styles/Home/OurSlider.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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
                        <Link to={product.path}><img className='singleProductImage' src={product.image} /></Link>
                        <div className='singleProductFirstSpan'>QUICK<br/> SHOP</div>
                        <Link to={product.path} className='allAnchorsBlack'><p>{product.brand}</p>
                        <p>{product.name}</p></Link>
                        <p>{product.price}</p>
                    </div>
                )
            })}
            </Slider>
        </div>
    )
}

export default OurSlider

