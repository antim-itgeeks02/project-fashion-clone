import React, { useEffect, useState } from 'react'
import '../styles/Common/NavLogo.css'
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { mainData } from '../../data/Collection/MainData';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/CartSlice';
import SingleCartItem from '../carts/SingleCartItem';
import cart  from '../redux/CartSlice';

const NavLogo = (props) => {
    const [width, setWidth] = useState(0);
    const [toSearch, setToSearch] = useState('')
    const handleSearch = (e) => {
        setToSearch(e.target.value);
        mainData.filter()
    }
    const showCart = () => {
        setWidth(26);
    }
    const hideCart = () => {
        setWidth(0);
    }

    const Products = useSelector((state) => state.cart)


    return (
        <div className='navLogo' onMouseEnter={props.handleHoverRemover} >
            <div className='search'>
                <input className='inputField' type='text' placeholder='Search' onChange={handleSearch} value={toSearch} />
                <button className='searchButton'><FaSearch /></button>
            </div>
            <div className='imageDiv'><Link to={'/'}><img className='logo' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria.jpg?v=1620934656&width=1200' /></Link></div>
            <div className='cartDivButton' >
                <div className='secondDivForA' onClick={showCart}>
                    <p className='mediaNot'>Cart</p>
                    <AiOutlineShoppingCart />
                    <p>0</p>
                </div>
            </div>
            {/* {
                width > 0 && (<div className='newDiv'></div>)
            } */}
            <div className='sideCartMain' style={{ width: `${width}%` }}>
                <div className='sideCartDiv'>
                    <RxCross2 className='sideCartDivCross' onClick={hideCart} />
                    <h2 className='sideCartDivHeading'>Cart</h2>
                    <p className='sideCartDivPara'>0 Items</p>
                </div>
                {Products.length > 0 ?
                    (
                        Products.map((item, index) => {
                            return (
                                <SingleCartItem item={item} key={index}/>
                            )
                        })
                    ) :
                    (
                        <div className='sideCartDiv2'>
                            Your cart is currently empty.
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default NavLogo