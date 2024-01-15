import React from 'react'
import './styles/Features.css'

const Features = () => {
  return (
    <div className='featuresContainer'>
        <div className='featuresItems' >
            <h3>EXTENDED WARRANTY</h3>
            <p>UP TO 10 YEAR COVERAGE</p>
        </div>
        <div className='featuresItems'>
            <h3>FREE SHIPPING</h3>
            <p>2-3 DAY SERVICE AVAILABLE</p>
        </div>
        <div className='featuresItems'>
            <h3>FREE 30 DAY RETURNS</h3>
            <p>OFFERED ON ALL ITEMS</p>
        </div>
    </div>
  )
}

export default Features