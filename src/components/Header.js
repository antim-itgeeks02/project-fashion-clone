import React, { useState } from 'react'
import './styles/Header.css'
import { headerData } from '../data/HeaderData.js';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa";
const Header = () => {
    const [current, setCurrent] = useState(0);
    const length = headerData.length - 1;
    // console.log(length);
    const prevButton = () => {
        current === 0 ? setCurrent(length) : setCurrent(current - 1);
    }
    const nextButton = () => {
        current === length ? setCurrent(0) : setCurrent(current + 1);
    }
    return (
        <div className='header'>
            <div className='icons'>
                <FaFacebookF className='icon' />
                <FaXTwitter className='icon' />
                <FaInstagram className='icon' />
            </div>
            <div className='advertisment'>
                <MdKeyboardArrowLeft onClick={prevButton} className='arrowButtons' />
                <p>{headerData[current].offer}</p>
                <MdKeyboardArrowRight onClick={nextButton} className='arrowButtons' />
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