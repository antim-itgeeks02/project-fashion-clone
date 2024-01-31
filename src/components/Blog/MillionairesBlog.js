import React from 'react'
import HeadingBanner from '../Collection/Reusable/HeadingBanner'
import { Link } from 'react-router-dom'
import ApracticleRight from './ApracticleRight'
import APracticleLeft from './APracticleLeft'

const MillionairesBlog = () => {
  const image = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/products/tag-heuer-carrera.png?v=1447726695&width=800';

  return (
    <div className='aPracticleMain'>
            <HeadingBanner src={'https://fashionopolism-galleria.myshopify.com/cdn/shop/articles/gallerie-012.jpg?v=1592250617&width=1200'} title={'What to Get That Special September Someone'} />
            <p style={{margin:'3%'}} className='mainCentreHeading'><Link to={'/'} className='mainHome'>Home</Link><Link to={'/blogs/news'} className='mainHome'>/News</Link>/Millionaires of the 21st Century</p>
            <div className='aPracticle'>
                <APracticleLeft/>
                <ApracticleRight image={image}/>
            </div>
        </div>
  )
}

export default MillionairesBlog