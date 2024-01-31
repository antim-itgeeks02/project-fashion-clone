import React from 'react'
import HPIJ from './HPIJ'
import FeaturedCard from './FeaturedCard'
import Card from './Card'

const ApracticleRight = ({image}) => {
  return (
    <div className='aPracticleright'>
                    <div className='meetDiv'>
                        <h4 className='meetDivHeading'>Meet Jeff</h4>
                        <img className='meetDivImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-009.jpg?v=1614313158&width=400' />
                        <p >Our resident Blogger with over 20 years of experience working with luxury Timepiece brands.</p>
                    </div>
                    <HPIJ h4='Signup for more'
                        p='Get more straight to your inbox by signing up for email alerts.'
                        button='Join' />
                    <FeaturedCard />
                    <Card image={image} name='Tag Heuer' brandName='Carrera' price='$ 9,600.00' button='Shop Carrera' />
                    <div></div>
                </div>
  )
}

export default ApracticleRight