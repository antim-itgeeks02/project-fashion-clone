import React, { useEffect, useState } from 'react'
import '../styles/Common/NavLogo.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { mainData } from '../../data/Collection/MainData';
import SideCartButton from './sideCart/SideCartButton';

const NavLogo = (props) => {    
    const [toSearch, setToSearch] = useState('');

    const handleSearch = (e) => {
        setToSearch(e.target.value);
        mainData.filter()
    }

    return (
        <div className='navLogo' onMouseEnter={props.handleHoverRemover} >
            <div className='search'>
                <input className='inputField' type='text' placeholder='Search' onChange={handleSearch} value={toSearch} />
                <button className='searchButton'><FaSearch /></button>
            </div>
            <div className='imageDiv'><Link to={'/'}><img className='logo' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria.jpg?v=1620934656&width=1200' /></Link></div>
            <div className='cartDivButton' >
                <SideCartButton settingTrue={props.settingTrue} sideShow={props.sideShow}/>
            </div>
        </div>
    )
}

export default NavLogo