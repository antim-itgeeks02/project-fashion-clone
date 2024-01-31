import React from 'react'
import HeadingBanner from '../Collection/Reusable/HeadingBanner'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import '../styles/CartPage.css'
// import { cart } from '../redux/Store';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    const Products = useSelector((state)=>state.cart);
    console.log(Products);
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

                {/* {Products.length > 0 ?
                    (<div>{Products.images[0].src}</div>) :
                    (
                        <div className='cartPageCartItems'>
                            <div>
                                <p>Your cart is currently empty.</p>
                            </div>
                        </div >
                    )} */}




            </div >
        </div >
    )
}

export default CartPage