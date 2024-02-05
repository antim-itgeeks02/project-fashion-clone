import React from 'react'
import '../styles/Blog/Card.css'
import ButtonForBlog from './ButtonForBlog'

const Card = (props) => {
  return (
    <div className='cardDiv'>
        <img src={props.image} alt='Image Not Found'/>
        <p>{props.name}</p>
        <p>{props.brandName}</p>
        <p>{props.price}</p>
        <ButtonForBlog title={props.button}/>
    </div>
  )
}

export default Card