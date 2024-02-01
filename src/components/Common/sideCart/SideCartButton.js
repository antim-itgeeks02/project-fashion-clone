import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SingleCartItem from '../../carts/SingleCartItem';
import { removeFromCart } from '../../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/Store';
import './SideCartButton.css'

const SideCartButton = (props) => {
    // const [width, setWidth] = useState(0);
    // const [cart, setCart] = useState([]);
    const dispatch = useDispatch()
    const showCart = () => {
        // setWidth(26);
        props.settingTrue();
    }
    const hideCart = () => {
        // setWidth(0);
        props.settingTrue();
    }
    // const data = store.getState().cart;
    // setCart(data)
    const { cart } = useSelector(state => state);
    // console.log(cart)
    function removeItemFromCart(item) {
        console.log("Clicked")
        dispatch(removeFromCart(item.id));
        // console.log(cart)
    }
    if (cart.length > 0) {
        var funToGetPrice = cart.map((item) => {
            return item.dataToShow.variants[0].price
        })
        var subTotal = funToGetPrice.reduce((acc, crr) => Number(acc) + Number(crr));
        console.log(subTotal)
    }

    return (
        <>
            <div className='secondDivForA' onClick={showCart}>
                <p className='mediaNot'>Cart</p>
                <AiOutlineShoppingCart />
                <p>0</p>
            </div>
            {
                props.sideShow && (<div className='newDiv'></div>)
            }
            <div className='sideCartMain' style={{ width: props.sideShow ? '26%' : '0' }}>
                <div className='sideCartDiv'>
                    <RxCross2 className='sideCartDivCross' onClick={hideCart} />
                    <h2 className='sideCartDivHeading'>Cart</h2>
                    <p className='sideCartDivPara'>{cart.length} Items</p>
                </div>
                {cart?.length > 0 ?
                    (
                        <div>{
                            cart.map((item, index) => {
                                return (
                                    <SingleCartItem item={item} key={index} removeItemFromCart={removeItemFromCart} />
                                )
                            })
                        }
                            <div className='belowCartDiv'>
                                <div className='belowCartDivItem'><p>Subtotal</p><p>$ {subTotal}.00</p></div>
                                <div className='belowCartDivItem'><p>Total</p><p>$ {subTotal}.00</p></div>
                                <div className='belowCartDivButtons'><div className='buttonViewCart'>View Cart</div><div className='buttonCheckOut'>Check Out</div></div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='sideCartDiv2'>
                            Your cart is currently empty.
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SideCartButton