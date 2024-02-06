import React, { useEffect } from 'react'
import { bannerData } from '../../data/Home/BannerData'
import Button from './Button'
import '../styles/Home/Category.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='banner'>
      {bannerData.map((banner, index) => {
        return (
          <div data-aos="fade-right" className='bannerSmall' style={{ backgroundImage : `url(${banner.image})`}} key={index} >
            <h3>{banner.heading}</h3>
            <p>{banner.para}</p>
            <Button path={banner.path} title={banner.name} />
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