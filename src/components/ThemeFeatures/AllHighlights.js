import React from 'react'
import '../styles/ThemeFeature/AllHighlights.css'
import {themeFeatureData} from '../../data/ThemeFeature/ThemeFeatureData'
import SingleHighlights from './SingleHighlights'

const AllHighlights = () => {
  return (
    <>
        {
            themeFeatureData.map((singleFeatureTitle,index) => {
                return(
                    <SingleHighlights key={index} title={singleFeatureTitle.title} allList = {singleFeatureTitle.list} />
                )
            })
        }
    </>
  )
}

export default AllHighlights