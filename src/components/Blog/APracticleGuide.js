import React from 'react'
import HeadingBanner from '../Collection/Reusable/HeadingBanner'
import { Link } from 'react-router-dom'
import '../styles/Blog/APracticleGuide.css'
import ApracticleRight from './ApracticleRight';
import APracticleLeft from './APracticleLeft';

const APracticleGuide = () => {
    const image = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/products/tag-heuer-carrera.png?v=1447726695&width=800';

    return (
        <div className='aPracticleMain'>
            <HeadingBanner src={'https://fashionopolism-galleria.myshopify.com/cdn/shop/articles/gallerie-011.jpg?v=1592250844&width=1200'} title={'A practical guide to watches'} />
            <p style={{margin:'3%'}} className='mainCentreHeading'><Link to={'/'} className='mainHome'>Home</Link><Link to={'/blogs/news'} className='mainHome'>/News</Link>/A practical guide to watches</p>
            <div className='aPracticle'>
                <APracticleLeft/>
                <ApracticleRight image={image}/>
            </div>
        </div>
    )
}

export default APracticleGuide