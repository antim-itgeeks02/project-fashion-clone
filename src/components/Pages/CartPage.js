import React from 'react'
import HeadingBanner from '../Collection/Reusable/HeadingBanner'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import '../styles/CartPage.css'

const CartPage = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    return (
        <div>
            <HeadingBanner src={src} />
            <div className='cartPageMain'>
                <p className='mainCentreHeading'><Link to={'/'} className='mainHome'>Home</Link>/ Your Shopping Cart</p>
                <div className='cartPageHeadingDiv'>
                    <p className=''><Link to={'/collections'} className='mainHome'><IoIosArrowBack />Continue Shopping</Link></p>
                    <h1 className='cartPageHeading'>Cart</h1>
                    <p>0 Item(s)</p>
                </div>
                <div className='cartPageCartItems'>
                    <div>
                        <p>Your cart is currently empty.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage