import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/CartSlice';
import cart from '../redux/CartSlice';
import { ImCross } from "react-icons/im";

const SingleCartItem = ({ item, index }) => {
    const [input, setInput] = useState(1);

    const minus = () => {
        if (input > 1) {
            setInput(input - 1);
        }
    }
    const add = () => {
        setInput(input + 1);
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const dispatch = useDispatch();
    function removeItemFromCart() {
        console.log("Clicked")
        dispatch(remove(item));
        console.log(item.id)
    }
    return (
        <div key={index} className='ourItemCart'>
            <img style={{ width: '64px', height: '85px' }} src={item?.images[0]?.src} />
            <div>
                <p>{item.title}</p>
                <div className='buyOneInputMainDivBorder'>
                    <button className='buyOneInputButton' onClick={minus} >-</button>
                    <input className='buyOneInputMain' type='number' id='quantity' onChange={handleChange} value={input} />
                    <button className='buyOneInputButton' onClick={add}>+</button>
                </div>
            </div>
            <div>
                <span onClick={removeItemFromCart}><ImCross /></span>
                <p>{item?.variants[0]?.price}</p>
            </div>
        </div>
    )
}

export default SingleCartItem