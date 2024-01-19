import React from 'react'
import '../../styles/Collections/Reusable/HeadingBanner.css'

const HeadingBanner = (props) => {
  return (
    <div className='headingBannerMain'>
        <img src={props.src} className='headingBannerImage'/>
        <h1 className='headingBannerH'>{props.title}</h1>
    </div>
  )
}

export default HeadingBanner