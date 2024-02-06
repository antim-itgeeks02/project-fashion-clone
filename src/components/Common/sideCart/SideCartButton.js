import React, { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SingleCartItem from '../../carts/SingleCartItem';
import { removeFromCart } from '../../redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import './SideCartButton.css'
import { Link } from 'react-router-dom';

const SideCartButton = (props) => {
    const dispatch = useDispatch()
    const showCart = () => {
        props.settingTrue();
    }
    const hideCart = () => {
        props.settingTrue();
    }
    const { cart } = useSelector(state => state);
    function removeItemFromCart(item) {
        dispatch(removeFromCart(item.id));
        console.log("dispatched")
    }
    var subTotal = 0;
    if (cart.length > 0) {
        var funToGetPrice = cart.map((item) => {
            return (item.quantity* item.dataToShow.variants[0].price)
        })
        subTotal = funToGetPrice.reduce((acc, crr) => Number(acc) + Number(crr));
    }
    var subTotalQuantity = 0;
    if (cart.length > 0) {
        var funToGetItem = cart.map((item) => {
            return item.quantity
        })
        subTotalQuantity = funToGetItem.reduce((acc, crr) => Number(acc) + Number(crr));
    }
    useEffect(()=>{
        if(props.sideShow && cart.length){
            props.settingTrue();
        }
    },[cart])

    return (
        <>
            <div className='secondDivForA' onClick={showCart}>
                <p className='mediaNot'>Cart</p>
                <AiOutlineShoppingCart />
                <p>{subTotalQuantity}</p>
            </div>
            {
                props.sideShow && (<div className='newDiv'></div>)
            }
            <div className={props.sideShow ?'sideCartMain open':'sideCartMain' } >
                <div className='sideCartDiv'>
                    <RxCross2 className='sideCartDivCross' onClick={hideCart} />
                    <h2 className='sideCartDivHeading'>Cart</h2>
                    <p className='sideCartDivPara'>{subTotalQuantity} Items</p>
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
                                <div className='belowCartDivButtons'><Link className='allAnchorsBlack' to={'/cart'}><div className='buttonViewCart'>View Cart</div></Link><div className='buttonCheckOut'>Check Out</div></div>
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