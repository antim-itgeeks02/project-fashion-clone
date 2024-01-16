import React from 'react'
import '../styles/Home/Button.css'

const Buttons = ({title}) => {
  return (
    <button className='mainButtons'>{title}</button>
  )
}

export default Buttons