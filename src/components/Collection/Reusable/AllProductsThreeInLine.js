import React from 'react'
import '../../styles/Collections/Reusable/AllProductsThreeInLine.css'
import { Link } from 'react-router-dom'

const AllProductsThreeInLine = ({ data }) => {
    return (
        <div className='allProductsThreeInLineMain'>
            {
                data.map((singelData, index) => {
                    return (
                        <div key={index} className='allProductsThreeInLineSibleDiv'>
                            <Link to={singelData.path}><img className='allProductsThreeInLineSibleImage' src={singelData.image} /></Link>
                            <div className='firstSpan'>QUICK SHOP</div>
                            <div className='infoDiv'>
                                <Link to={singelData.path} className='allAnchorsBlack'><p>{singelData.brand}</p></Link>
                                <Link to={singelData.path} className='allAnchorsBlack'><p>{singelData.name}</p></Link>
                                <p>{singelData.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProductsThreeInLine