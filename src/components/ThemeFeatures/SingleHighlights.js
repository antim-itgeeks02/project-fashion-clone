import React from 'react'
import '../styles/ThemeFeature/SingleHighlights.css'

const SingleHighlights = ({title ,allList}) => {
  return (
    <div className='singleHighlightsMain'>
        <h4 className='singleHighlightsHeading'>{title}</h4>
        <div className='allList'>
        {
            allList.map((item,index)=>{
                return(
                    <li className='singleLi' key={index}>{item}</li>
                )
            })
        }
        </div>
    </div>
  )
}

export default SingleHighlights