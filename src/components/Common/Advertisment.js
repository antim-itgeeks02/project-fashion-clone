import React from 'react';
import '../styles/Home/Advertisment.css';
import { MdOutlineWatch } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaThumbsUp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Advertisment = () => {
    return (
        <div className='advertismentDiv'>
            <div className='advertismentItem'>
                <MdOutlineWatch className='advertismentItemIcon' />
                <p>Flexible Finance options</p>
            </div>
            <div className='advertismentItem'>
                <TbWorld className='advertismentItemIcon' />
                <p>Worldwide Shipping</p>
            </div>
            <div className='advertismentItem'>
                <FaThumbsUp className='advertismentItemIcon' />
                <p>Guaranteed Authentic</p>
            </div>
            <div className='advertismentItem'>
                <MdCall className='advertismentItemIcon' />
                <p>Call us: 1-800-000-0000</p>
            </div>

        </div>
    )
}

export default Advertisment