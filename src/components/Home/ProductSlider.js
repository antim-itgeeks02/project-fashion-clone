import React, { useEffect } from 'react'
import { productSliderData } from '../../data/Home/ProductSliderData'
import OurSlider from './OurSlider'
import '../styles/Home/ProductSlider.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductSlider = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-right" className = 'productSlider'>
      <h2 className='trending'><Link to={'/collections/our-favourites'} className='allAnchorsBlack'>TRENDING</Link></h2>
      <div className='productSliderBorder'></div>
      <OurSlider products={productSliderData}/>
    </div>
  )
}

export default ProductSlider