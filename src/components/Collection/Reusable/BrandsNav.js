import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Collections/Reusable/BrandsNav.css'

const BrandsNav = ({data}) => {
  return (
    <div className='brandsNavMain' >
        {
            data.map((item,index) =>{
                return(
                    <Link key={index} to={item.path} className='allAnchorsWhite' ><li>{item.name}</li></Link>
                )
            })
        }
        
    </div>
  )
}

export default BrandsNav