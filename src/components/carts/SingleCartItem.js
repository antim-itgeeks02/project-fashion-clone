import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './SingleCartItem.css'

const SingleCartItem = ({ item, index, removeItemFromCart }) => {
    const [input, setInput] = useState(item.quantity);
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

    return (
        <div key={index} className='ourItemCart'>
            <img style={{ width: '64px', height: '85px' }} src={item.dataToShow?.images[0]?.src} />
            <div className='divToFlex'>
                <p>{item.dataToShow.title}</p>
                <div className='ourItemCartButtonDiv'>
                    <button className='ourItemCartButton1' onClick={minus} >-</button>
                    <input className='ourItemCartButtonInput' type='number' id='quantity' onChange={handleChange} value={input} />
                    <button className='ourItemCartButton2' onClick={add}>+</button>
                </div>
            </div>
            <div className='divToFlex' style={{alignItems:'flex-end'}}>
                <RxCross2 className='sideCartDivCross' onClick={() => removeItemFromCart(item)} />
                <p>${item.dataToShow?.variants[0]?.price}</p>
            </div>
        </div>
    )
}

export default SingleCartItem