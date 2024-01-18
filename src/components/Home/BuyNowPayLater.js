import React from 'react'
import '../styles/Home/BuyNowPayLater.css'
import Buttons from './Button'

const BuyNowPayLater = () => {
  return (
    <div className='buyNowPay'>
        <h2>BUY NOW PAY LATER</h2>
        <p>Flexible payment options available</p>
        <Buttons title={'START SHOPPING'} path={'/collections'}/>
    </div>
  )
}

export default BuyNowPayLater