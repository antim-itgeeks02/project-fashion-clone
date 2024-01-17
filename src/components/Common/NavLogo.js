import React from 'react'
import '../styles/Common/NavLogo.css'
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavLogo = () => {
    return (
        <div className='navLogo'>
            <div className='search'>
                <input className='inputField' type='text' placeholder='Search' />
                <button className='searchButton'><FaSearch /></button>
            </div>
            <div className='imageDiv'><img className='logo' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria.jpg?v=1620934656&width=1200' /></div>
            <div className='cartDiv'>
                <p>Cart</p>
                <AiOutlineShoppingCart />
                <p>0</p>
            </div>
        </div>
    )
}

export default NavLogo