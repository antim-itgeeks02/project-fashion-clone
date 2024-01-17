import React from 'react'
import '../styles/Blog/Article.css'

const Article = (props) => {
    return (
        <div className='article'>
            <img src={props.image}  className='articleImage'/>
            <div className='articlediv'>
                <h3 className='articledivHeading'>{props.title}</h3>
                <p>{props.date}</p>
                <p>{props.para}</p>
                <h3>{props.button}</h3>
            </div>
        </div>
    )
}

export default Article