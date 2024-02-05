import React from 'react'
import HeadingBanner from '../Collection/Reusable/HeadingBanner'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import '../styles/CartPage.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice';
import CartPageSingleCard from '../carts/CartPageSingleCard';

const CartPage = () => {
    const src = 'https://fashionopolism-galleria.myshopify.com/cdn/shop/files/gallerie-002.jpg?v=1614313030&width=1200'
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch();
    function removeItemFromCart(item) {
        dispatch(removeFromCart(item.id));
    }
    if (cart.length > 0) {
        var funToGetPrice = cart.map((item) => {
            return (item.quantity * item.dataToShow.variants[0].price)
        })
        var subTotal = funToGetPrice.reduce((acc, crr) => Number(acc) + Number(crr));
    }
    if (cart.length > 0) {
        var funToGetItem = cart.map((item) => {
            return item.quantity
        })
        var subTotalQuantity = funToGetItem.reduce((acc, crr) => Number(acc) + Number(crr));
    }
    return (
        <div>
            <HeadingBanner src={src} />
            <div className='cartPageMain'>
                <p className='mainCentreHeading'><Link to={'/'} className='mainHome'>Home</Link>/ Your Shopping Cart</p>
                <div className='cartPageHeadingDiv'>
                    <p className=''><Link to={'/collections'} className='mainHome'><IoIosArrowBack />Continue Shopping</Link></p>
                    <h1 className='cartPageHeading'>Cart</h1>
                    <p>{subTotalQuantity} Item(s)</p>
                </div>
                {cart.length > 0 ?
                    (<div>
                        <div style={{ borderTop: '1px Solid #d5d5d5' }}>{
                            cart.map((item, index) => {
                                return (
                                    <CartPageSingleCard item={item} key={index} removeItemFromCart={removeItemFromCart} />
                                )
                            })
                        }
                        </div>
                        <div className='bottomTotalDivMain'>
                            <div className='bottomTotalDiv'>
                                <div className='bottomTotalDivUpper specialGrey'>
                                    <p>Leave a note with your order</p>
                                    <p>+</p>
                                </div>
                                <div className='bottomTotalDivUpper' style={{ borderBottom: '1px solid #d5d5d5' }}>
                                    <p>Subtotal</p>
                                    <p>$ {subTotal}.00</p>
                                </div>
                            </div>
                            <div className='bottomTotalDiv'>
                                <div className='bottomTotalDivUpper specialGrey'>
                                    <p>Get shipping estimate</p>
                                    <p>+</p>
                                </div>
                                <div className='bottomTotalDivUpper'>
                                    <p>Total</p>
                                    <p>$ {subTotal}.00</p>
                                </div>
                            </div>
                            <div className='buttonCheckOut' style={{ width: 'fit-content' }}>Check Out</div>
                        </div>
                    </div>) :
                    (
                        <div className='cartPageCartItems'>
                            <div>
                                <p>Your cart is currently empty.</p>
                            </div>
                        </div >
                    )}
            </div >
        </div >
    )
}

export default CartPage