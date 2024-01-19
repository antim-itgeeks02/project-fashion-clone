import React from 'react'
import Buttons from '../../Home/Button'
import '../../styles/Collections/Reusable/SmallAd.css'

const SmallAd = () => {
    return (
        <div className='smallAdMain'>
            <img className='smallAdImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-004.jpg?v=1614313147&width=1200' />
            <div className='smallAdDiv'>
                <h2 className='smallAdH'>We love these</h2>
                <p className='smallAdP'>Browse our collection of favorites</p>
                <Buttons title={'Explore'} />
            </div>
        </div>
    )
}

export default SmallAd