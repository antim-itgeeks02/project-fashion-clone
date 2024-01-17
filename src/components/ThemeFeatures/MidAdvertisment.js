import React from 'react'
import '../styles/ThemeFeature/MidAdvertisment.css'
const MidAdvertisment = () => {
    return (
        <div className='midAdvertisment'>
            <div className='midAdvertismentFirst'>
                <img className='MidAdvertismentImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/Sections.jpg?v=1701727508&width=700' />
                <div>
                    <h3 className='MidAdvertismentHeadings'>STORE SETUP MADE SIMPLE</h3>
                    <div>
                        <p>Spend less time editing and more time selling.</p>
                        <p>Showcase products, collections, sale banners your way with drag and drop ease.</p>
                        <p>Our intuitive easy to use sections make theme setup a breeze.</p>
                    </div>
                </div>
            </div>
            <div className='midAdvertismentSecond'>
                <div className='midAdvertismentSecondSpecial'>
                    <h3 className='MidAdvertismentHeadings'>FEATURE RICH, BUILT FOR SALES</h3>
                    <div >
                        <p>Packed with meaningful elements proven to increase sales.</p>
                        <p>Quick add to cart, Complementary products, Trust badges, Countdowns, and more</p>
                        <p>remove friction and increase customer</p>
                    </div>
                </div>
                <img className='MidAdvertismentImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/Built_for_sales_fdf52103-95fc-4320-ae2a-604e41e37abf.jpg?v=1701727508&width=700' />
            </div>
        </div>
    )
}

export default MidAdvertisment