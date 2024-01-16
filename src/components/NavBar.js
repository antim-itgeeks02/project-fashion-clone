import React from 'react'
import './styles/NavBar.css'
import { navBarData } from '../data/NavBarData'
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
  return (
    <div className='navBar'>
      {navBarData.map((nav, index) => {
        return (
           nav.item === 'Shop' ? (<p key={index} className='navItem'>{nav.item}<MdKeyboardArrowDown className='navItemArrow'/></p>) : (<p key={index} className='navItem'>{nav.item}</p>) 
        )
      })}
    </div>
  )
}

export default NavBar