import React from 'react'
import '../styles/Common/Subscribe.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='leftDiv'>
                <h2>Subscribe to our newsletter</h2>
                <p>Signup for our newsletter to stay up to date on sales and events.</p>
            </div>
            <div className='rightDiv'>
                <input placeholder='Enter Your Email Address' type='search' />
                <div className='iconsSub'>
                    <FaFacebookF className='icon' />
                    <FaXTwitter className='icon' />
                    <FaInstagram className='icon' />
                </div>

            </div>
        </div>
    )
}

export default Subscribe