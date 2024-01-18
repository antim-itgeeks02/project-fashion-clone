import React from 'react'
import '../styles/Common/Subscribe.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

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
                    <Link to='https://www.facebook.com/ugmedia' target='_blank'><FaFacebookF className='icon' /></Link>
                    <Link to='https://twitter.com/undergrndmedia' target='_blank'><FaXTwitter className='icon' /></Link>
                    <Link to='https://www.instagram.com/undergroundmedia/' target='_blank'><FaInstagram className='icon' /></Link>
                </div>

            </div>
        </div>
    )
}

export default Subscribe