import React from 'react'
import { ReactComponent as Star } from '../svg/star.svg'
import '../styles/Home/WithStyles.css'

const WithStyles = ({ item }) => {
  return (
    <div className='withStylesMain'>
      <h3 style={{color:'#2b2b2b',fontSize:'18px'}}>{item.para1}</h3>
      <p style={{color:'#2b2b2b',fontSize:'15px'}}>{item.para2}</p>
      <p style={{color:'#2b2b2b',fontSize:'15px'}}>{item.para3}</p>
      <div className=' flex'><Star /><Star /><Star /><Star /><Star /></div>
    </div>
  )
}

export default WithStyles