import React from 'react'
import BuyOneVideo from '../BuyOne/BuyOneVideo'
import '../styles/Information/AllInformation.css'
import { infoData } from '../../data/Information/InfoData'
import ShopByBrand from '../Collection/ShopByBrand'

const AllInformation = () => {
    const src = 'https://cdn.shopify.com/videos/c/vp/e56426dd886745878ee02c574e34d2ae/e56426dd886745878ee02c574e34d2ae.HD-720p-4.5Mbps-17926794.mp4'
    return (
        <div>
            <BuyOneVideo src={src} />
            <div className='infoWhoWeMain'>
                <h2 className='infoWhoWeHeading'>WHO WE ARE</h2>
                <div className='infoWhoWeBorder'></div>
                <div className='infoWhoWeDiv'>Our passion for horology transcends time itself. Established with a commitment to excellence, we stand as a premier destination for connoisseurs of sophistication and precision. With a curated selection of the world's most prestigious watchmakers, we invite you to explore a realm where craftsmanship meets artistry.</div>
            </div>
            <div className='infoGalleria'><em><strong>Galleria - </strong>Elevating Timekeeping to an Art Form</em></div>
            <div className='infoImageText'>
                <div className='infoImageTextDiv'>
                    <p>Our journey began with a deep admiration for the intricate mechanics and timeless elegance that define high-end watches.</p>
                    <p>This admiration evolved into a mission: to provide discerning individuals with access to exceptional timepieces that mirror their refined sensibilities.</p>
                    <p>Each watch in our collection tells a story of dedication, innovation, and the pursuit of perfection that Swiss craftsmanship embodies.</p>
                </div>
                <img className='infoImageTextImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria-fashionopolism--shopify-4.jpg?v=1693507906&width=1200' />
            </div>
            <div className='infoDataMain'>
                {
                    infoData.map((data, index) => {
                        return (
                            <div key={index} className='infoDataDiv'>
                                <p><strong>{data.strong}</strong></p>
                                <p>{data.p1}</p>
                                <p>{data.p2}</p>
                            </div>
                        )
                    })
                }
            </div>
            <ShopByBrand/>
        </div>
    )
}

export default AllInformation