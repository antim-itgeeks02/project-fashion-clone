import React from 'react'
import '../../styles/Collections/Reusable/AllProductsThreeInLine.css'
import { Link } from 'react-router-dom'

const AllProductsThreeInLine = ({ data }) => {

    return (
        <div className='allProductsThreeInLineMain'>
            {
                data.map((singelData, index) => {
                    return (
                        <div key={index} className='allProductsThreeInLineSingleDiv'>
                            <Link to={`products/${singelData.handle}`}><img className='allProductsThreeInLineSibleImage' src={singelData.images[0].src} /></Link>
                            <div className='firstSpan'>QUICK SHOP</div>
                            <div className='infoDiv'>
                                <Link to={`products/${singelData.handle}`} className='allAnchorsBlack'><p>{singelData.vendor}</p></Link>
                                <Link to={`products/${singelData.handle}`} className='allAnchorsBlack'><p>{singelData.title}</p></Link>
                                <p>{singelData.variants[0].price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProductsThreeInLine