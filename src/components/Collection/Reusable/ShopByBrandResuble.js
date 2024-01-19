import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Collections/Reusable/ShopByBrandResuble.css'

const ShopByBrandResuble = ({watch}) => {
    return (
        <div className='singleWatch' >
            <Link to={watch.path} className='allAnchorsBlack'><img src={watch.image} className='singleWatchimg' /></Link>
            <Link to={watch.path} className='allAnchorsBlack'><h3 className='allWatchesH3'>{watch.Brand}</h3></Link>
            <Link to={watch.path} className='allAnchorsBlack'><p>{watch.item}</p></Link>
        </div>
    )
}

export default ShopByBrandResuble