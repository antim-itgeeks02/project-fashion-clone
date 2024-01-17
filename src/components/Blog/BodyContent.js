import React from 'react'
import { Link } from 'react-router-dom'
import Article from './Article'
import { newsArticle } from '../../data/Blog/NewsArticleData'
import HPIJ from './HPIJ'
import FeaturedCard from './FeaturedCard'
import Card from './Card'
import'../styles/Blog/BodyContent.css'

const BodyContent = () => {
    const image = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/products/tag-heuer-carrera.png?v=1447726695&width=800';
    return (
        <div className='main'>
            <p className='mainCentreHeading'><Link to={'/'} className='mainHome'>Home</Link>/News</p>
            <p>All the latest industry news and one or 2 special offers and events!</p>
            <div className='bodyMain'>
                <div className='left'>
                    {
                        newsArticle.map((singleArticle, index) => (
                            <Article key={index}
                                image={singleArticle.image}
                                title={singleArticle.title}
                                date={singleArticle.date}
                                para={singleArticle.para}
                                button={singleArticle.button}
                                path={singleArticle.path} />
                        ))
                    }
                </div>
                <div className='right'>
                    <HPIJ h4='Join the list'
                        p='Signup to receive our monthly email newsletter. We will not share your details.'
                        button='Join' />
                    <FeaturedCard />
                    <Card image={image} name = 'Tag Heuer' brandName = 'Carrera' price ='$ 9,600.00' button='Shop Carrera' />
                </div>
            </div>
            <p className='footerPara'>Showing items 1-3 of 3.</p>
        </div>
    )
}

export default BodyContent