import React from 'react'
import '../styles/Home/Button.css'
import { Link } from 'react-router-dom';

const Buttons = ({path,title}) => {
  return (
    <Link to={path} className='allAnchorsWhite'><button className='mainButtons'>{title}</button></Link>
  )
}

export default Buttons