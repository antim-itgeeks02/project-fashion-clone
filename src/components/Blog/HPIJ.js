import React from 'react'
import '../styles/Blog/HPIJ.css'
import ButtonForBlog from './ButtonForBlog'

const HPIJ = (props) => {
  return (
    <div className='hpijDiv'>
        <h4 className='joinListHeading'>{props.h4}</h4>
        <p >{props.p}</p>
        <input className='hpijInput' placeholder='Enter Your Email Address'/>
        <ButtonForBlog title={props.button}/>
    </div>
  )
}

export default HPIJ