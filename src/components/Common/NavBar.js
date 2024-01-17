import React from 'react'
import '../styles/Common/NavBar.css'
import { navBarData } from '../../data/NavBarData'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      {navBarData.map((nav, index) => {
        return (
           nav.item === 'Shop' ? (<Link to={nav.path} key={index} className='navItem'><p>{nav.item}<MdKeyboardArrowDown className='navItemArrow'/></p></Link>) : (<Link to={nav.path} key={index} className='navItem'><p>{nav.item}</p></Link>) 
        )
      })}
    </div>
  )
}

export default NavBar