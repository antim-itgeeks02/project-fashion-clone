import React from 'react'
import { productSliderData } from '../data/ProductSliderData'
import Slider from './Slider'

const ProductSlider = () => {
  return (
    <div>
      <p>TRENDING</p>
      <Slider products={productSliderData}/>
    </div>
  )
}

export default ProductSlider