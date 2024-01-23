import React from 'react'
import '../../styles/Collections/Reusable/AllProductsThreeInLine.css'
import { Link, useNavigate } from 'react-router-dom'
// , setPath
const AllProductsThreeInLine = ({ data }) => {
    const navigate = useNavigate();
    function Redirect(path) {
        // setPath(path);
        navigate(`${path}`)
    }
    return (
        <div className='allProductsThreeInLineMain'>
            {
                data.map((singelData, index) => {
                    return (
                        <div key={index} className='allProductsThreeInLineSibleDiv'>
                            <img className='allProductsThreeInLineSibleImage' src={singelData.image} onClick={() => Redirect(singelData.path)} />
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