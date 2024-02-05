import React, { useState } from 'react'
import '../styles/Common/Header.css'
import { headerData } from '../../data//Common/HeaderData';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    const [current, setCurrent] = useState(0);
    const length = headerData.length - 1;
    const prevButton = () => {
        current === 0 ? setCurrent(length) : setCurrent(current - 1);
    }
    const nextButton = () => {
        current === length ? setCurrent(0) : setCurrent(current + 1);
    }
    return (
        <div className='header'>
            <div className='icons'>
                <Link to='https://www.facebook.com/ugmedia' target='_blank' className='icon' ><FaFacebookF  /></Link>
                <Link to='https://twitter.com/undergrndmedia' target='_blank' className='icon' ><FaXTwitter /></Link>
                <Link to='https://www.instagram.com/undergroundmedia/' target='_blank' className='icon' ><FaInstagram  /></Link>
            </div>
            <div className='advertisment'>
                <MdKeyboardArrowLeft onClick={prevButton} className='arrowButtons cursor-pointer' />
                <p>{headerData[current].offer}</p>
                <MdKeyboardArrowRight onClick={nextButton} className='arrowButtons cursor-pointer' />
            </div>
            <div>
            </div>
            <div className='usd'>
                <LiaFlagUsaSolid className='usdIcon' />
                <p className='usdIcon'>USD</p>
                <FaDollarSign className='usdIcon' />
            </div>
        </div>
    )
}

export default Header