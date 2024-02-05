import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../redux/CartSlice';
import { RxCross2 } from "react-icons/rx";
import './CartPageSingleCard.css'

const CartPageSingleCard = ({ item, index, removeItemFromCart }) => {
    const [input, setInput] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        setInput(item.quantity);
    }, [item.quantity])
    const minus = () => {
        if (input > 1) {
            dispatch(decrementQuantity(item));
        }
    }
    const add = () => {
        dispatch(incrementQuantity(item));
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div key={index} className='cartPageSingleCardMain'>
            <div className='cartPageSingleCardSubMain'>
                <div className='cartPageSingleCardImageTitleDiv'>
                    <img src={item.dataToShow?.images[0]?.src} className='cartPageSingleCardImage' alt='Not Found'/>
                    <p>{item.dataToShow.title}</p>
                </div>
                <div className='cartPageSingleCardSubMain2'>
                    <p>$ {item.dataToShow?.variants[0]?.price}</p>
                    <div className='cartPageSingleCardIncDcrDiv'>
                        <button className='cartPageSingleCardIncDcrButton' style={{borderRight:'1px Solid #d5d5d5'}} onClick={minus} >-</button>
                        <input className='cartPageSingleCardIncDcrInput' type='number' id='quantity' onChange={handleChange} value={input} />
                        <button className='cartPageSingleCardIncDcrButton' style={{borderLeft:'1px Solid #d5d5d5'}} onClick={add}>+</button>
                    </div>
                    <p>$ {item.dataToShow?.variants[0]?.price*item.quantity}</p>
                </div>
            </div>
            <RxCross2 className='' onClick={() => removeItemFromCart(item)} />
        </div>
    )
}

export default CartPageSingleCard