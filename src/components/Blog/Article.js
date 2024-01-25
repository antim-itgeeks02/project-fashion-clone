import React from 'react'
import '../styles/Blog/Article.css'
import { Link } from 'react-router-dom'

const Article = (props) => {
    return (
        <div className='article'>
            <Link to={props.path}><img src={props.image}  className='articleImage'/></Link>
            <div className='articlediv'>
                <Link className='allAnchorsBlack' to={props.path}><h3 className='articledivHeading'>{props.title}</h3></Link>
                <p>{props.date}</p>
                <p>{props.para}</p>
                <Link className='allAnchorsBlack' to={props.path}><h3>{props.button}</h3></Link>
            </div>
        </div>
    )
}

export default Article