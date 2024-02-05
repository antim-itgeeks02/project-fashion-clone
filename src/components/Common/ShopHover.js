import React from 'react'
import { shopData } from '../../data/Common/ShopData'
import '../styles/Common/ShopHover.css'
import { Link } from 'react-router-dom'

const ShopHover = (props) => {
    const watch = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-006.jpg?v=1614313156&width=1200'
    return (
        <div className='shopHoverMain' onMouseLeave={props.handleHoverRemover}>
            <img className='shopHoverImg' src={watch} alt='Image Not Found' />
            <div className='shopHoverAllDiv'>
                {
                    shopData.map((shop, index) => {
                        return (
                            <div key={index} className='singleShopHoverDiv'>
                                <h4 className='singleShopHoverH'><Link to={shop.link} className='allAnchorsBlack'>{shop.heading}</Link></h4>
                                {
                                    shop.list.map((subShop, index) => {
                                        return (
                                            <li className='shoplist' key={index}><Link to={subShop.path} className='allAnchorsBlack'>{subShop.name}</Link></li>
                                        )
                                    })
                                }
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopHover