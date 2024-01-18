import React from 'react'
import { productSliderData } from '../../data/Home/ProductSliderData'
import OurSlider from './OurSlider'

import '../styles/Home/ProductSlider.css'
import { Link } from 'react-router-dom'

const ProductSlider = () => {
  return (
    <div className = 'productSlider'>
      <h2 className='trending'><Link to={'/collections/our-favourites'} className='allAnchorsBlack'>TRENDING</Link></h2>
      <div className='productSliderBorder'></div>
      <OurSlider products={productSliderData}/>
    </div>
  )
}

export default ProductSlider