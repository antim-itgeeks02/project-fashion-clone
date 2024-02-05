import React from 'react'
import { MdOutlineVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { ImEqualizer } from "react-icons/im";
import '../styles/ThemeFeature/Benifits.css'

const Benifits = () => {
    return (
        <div className='benifits'>
            <div className='benifitsDiv'>
                <MdOutlineVerified className='benifitsIcons' />
                <p><strong>PARTNERS SINCE 2007</strong></p>
            </div>
            <div className='benifitsDiv'>
                <BiSupport className='benifitsIcons' />
                <p><strong>FREE DEDICATED SUPPORT</strong></p>
            </div>
            <div className='benifitsDiv'>
                <ImEqualizer className='benifitsIcons'/>
                <p><strong>FREE UPDATES FOREVER</strong></p>
            </div>
        </div>
    )
}

export default Benifits