import React from 'react'
import { bannerData } from '../data/BannerData'
import Button from './Button'

const Category = () => {
  return (
    <div>
      {bannerData.map((banner, index) => {
        return (
          <div key={index}>
            <h3>{banner.heading}</h3>
            <p>{banner.para}</p>
            <Button title={banner.name} />
          </div>
        )
      })}
    </div>
  )
}

export default Category

//   < Banner heading = { bannerData[0].heading }
// para = { bannerData[0].para }
// title = { bannerData[0].name }
//   />
//   <Banner heading={bannerData[1].heading}
//     para={bannerData[1].para}
//     title={bannerData[1].name} />