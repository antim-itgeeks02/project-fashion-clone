import React from 'react'
import '../styles/BuyOne/MidAdBuyOne.css'

const MidAdBuyOne = () => {
    return (
        <div className='midAdBuyOneMain'>
            <div className='midAdBuyOneUpper'>
                <img className='midAdBuyOneImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria-fashionopolism--shopify-4.jpg?v=1693507906&width=700' />
                <div className='midAdBuyOneDiv'>
                    <h3 style={{fontSize:'18px',letterSpacing:'1px'}}>Made in Switzerland</h3>
                    <p style={{fontSize:'15px'}}>Discover Timeless Elegance: Introducing our exquisite collection of high-end watches meticulously handcrafted in the heart of Switzerland.</p>
                    <p style={{fontSize:'15px'}}>Each timepiece is a fusion of artistry and precision engineering, a testament to the revered Swiss horological heritage.</p>
                </div>
            </div>
            <div className='midAdBuyOneUpper'>
                <div className='midAdBuyOneDiv'>
                    <h3 style={{fontSize:'18px',letterSpacing:'1px'}}>Meticulous Craftsmanship</h3>
                    <p style={{fontSize:'15px'}}>Meticulously crafted with the finest materials, our watches embody a legacy of sophistication, offering not just an accessory, but a statement of refined taste.</p>
                    <p style={{fontSize:'15px'}}>Elevate every moment with unparalleled accuracy and unparalleled style – a true embodiment of Swiss craftsmanship."</p>
                </div>
                <img className='midAdBuyOneImage' src='https://fashionopolism-galleria.myshopify.com/cdn/shop/files/galleria-fashionopolism--shopify-2.jpg?v=1693507905&width=700' />
            </div>
        </div>
    )
}

export default MidAdBuyOne