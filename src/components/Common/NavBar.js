import React from 'react'
import '../styles/Common/NavBar.css'
import { navBarData } from '../../data/Common/NavBarData'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <div className='navBar'>
      {navBarData.map((nav, index) => {
        return (
          nav.item === 'Shop' ?
            (
              <Link to={nav.path} key={index} className='navItem'><p onMouseEnter={props.handleHover} className='flex gap-1 items-center' ><li className='list-none'>{nav.item}</li><MdKeyboardArrowDown className='navItemArrow' /></p></Link>
            ) :
            (<Link to={nav.path} key={index} className='navItem'><p onMouseEnter={props.handleHoverRemover}>{nav.item}</p></Link>)
        )
      })}
    </div>
  )
}

export default NavBar